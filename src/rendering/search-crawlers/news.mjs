function extract(request, response) {
  function validateData(data, acceptPageType) {
    const { query: { path = [] } = {} } = data;
    return path[1] === acceptPageType;
  }

  function getDisplayNameList(list) {
    return list.map(({ displayName }) => displayName);
  }

  function processData(data, acceptPageType) {
    const {
      props: {
        pageProps: {
          layoutData: { sitecore: { context: { itemPath } = {}, route } = {} } = {},
        } = {},
      } = {},
    } = data;

    if (!route || !validateData(data, acceptPageType)) {
      return [];
    }

    return doProcessData(itemPath, route);
  }

  function doProcessData(urlPath, data) {
    const {
      displayName,
      itemId,
      fields: { Image, Content, Audience, Excerpt, PublishDate },
    } = data;

    const content = $('.section-content .right-column .rich-text p').text();
    const {
      value: {
        thumbnailsrc: image_thumb_url,
        src: image_url,
        alt: imageDescription,
        'stylelabs-content-id': imageID,
      } = {},
    } = Image;
    const { value: content_html } = Content;
    const { value: excerpt } = Excerpt;
    const { value: publish_date } = PublishDate;
    const audience = getDisplayNameList(Audience);

    return [
      {
        content,
        content_html,
        excerpt,
        image_thumb_url,
        image_url,
        publish_date,
        audience,
        type: 'news',
        id: itemId,
        name: displayName,
        url: urlPath,
      },
      {
        image_url,
        image_thumb_url,
        type: 'photo',
        name: displayName,
        id: imageID,
        description: imageDescription,
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
    return processData(data, 'news');
  } catch (e) {
    return [];
  }
}

export { extract };
