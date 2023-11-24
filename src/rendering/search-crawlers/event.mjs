function extract(request, response) {
  function validateData(page, acceptPageType) {
    return page.includes(acceptPageType);
  }

  function processData(data, acceptPageType) {
    const { page, query, props: { pageProps: { event } = {} } = {} } = data;
    if (!page || !validateData(page, acceptPageType)) {
      return [];
    }
    return doProcessData(page, query, event);
  }

  function doProcessData(page, query, event) {
    const image = event.featuredImage.results[0].fileUrl;
    const url = page.replace('[id]', query.id).replace('[slug]', query.slug);
    const sport = event.sport.results[0].title;
    return [
      {
        url,
        type: 'event',
        id: query.id,
        name: event.title,
        description: event.teaser,
        image_url: image,
        image_thumb_url: image,
        sport: sport,
      },
    ];
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
