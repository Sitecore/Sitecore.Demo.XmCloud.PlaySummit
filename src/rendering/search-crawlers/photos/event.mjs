function extract(request, response) {
  function validateData(page, acceptPageType) {
    return page.includes(acceptPageType);
  }

  function processData(data, acceptPageType) {
    const { page, props: { pageProps: { event } = {} } = {} } = data;
    if (!page || !validateData(page, acceptPageType)) {
      return [];
    }
    return doProcessData(event);
  }

  function doProcessData(event) {
    return event.relatedMedia.results.map((media) => ({
      type: 'photo',
      id: media.id,
      name: media.name.split('.')[0],
      description: media.description,
      image_url: media.fileUrl,
      image_thumb_url: media.fileUrl,
    }));
  }

  const $ = response.body;
  const dataNode = $('#__NEXT_DATA__');
  if (!dataNode) {
    return [];
  }
  try {
    return processData(JSON.parse(dataNode.html()), 'event');
  } catch (e) {
    return [];
  }
}

export { extract };
