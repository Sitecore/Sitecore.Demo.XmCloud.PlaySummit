function extract(request, response) {
  function validateData(data, acceptPageType) {
    const { query: { path = [] } = {} } = data;
    return path[1] === acceptPageType;
  }

  function processData(data, acceptPageType) {
    const { props: { pageProps: { layoutData: { sitecore: { route } = {} } = {} } = {} } = {} } =
      data;

    if (!route || !validateData(data, acceptPageType)) {
      return [];
    }

    return doProcessData(route);
  }

  function doProcessData(data) {
    const {
      displayName,
      fields: { Logo },
    } = data;

    const {
      value: {
        thumbnailsrc: image_thumb_url,
        src: image_url,
        alt: description,
        'stylelabs-content-id': id,
      } = {},
    } = Logo;

    return [
      {
        id,
        description,
        image_url,
        image_thumb_url,
        type: 'photo',
        name: displayName,
      },
    ];
  }

  const $ = response.body;
  const dataNode = $('#__NEXT_DATA__');
  if (!dataNode) {
    return [];
  }

  let data;
  try {
    data = JSON.parse(dataNode.html());
  } catch (e) {
    return [];
  }

  try {
    return processData(data, 'vendors');
  } catch (e) {
    return [];
  }
}

export { extract };
