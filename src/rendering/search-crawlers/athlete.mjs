function extract(request, response) {
  function validateData(page, acceptPageType) {
    return page.includes(acceptPageType);
  }

  function processData(data, acceptPageType) {
    const { page, query, props: { pageProps: { athlete } = {} } = {} } = data;
    if (!page || !validateData(page, acceptPageType)) {
      return [];
    }
    return doProcessData(page, query, athlete);
  }

  function doProcessData(page, query, athlete) {
    const image = athlete.profilePhoto.results[0].fileUrl;
    const url = page.replace('[id]', query.id).replace('[slug]', query.slug);
    return [
      {
        url,
        type: 'athlete',
        id: query.id,
        name: athlete.athleteName,
        image_url: image,
        image_thumb_url: image,
      },
    ];
  }
  const $ = response.body;
  const dataNode = $('#__NEXT_DATA__');
  if (!dataNode) {
    return [];
  }
  try {
    return processData(JSON.parse(dataNode.html()), 'athlete');
  } catch (e) {
    return [];
  }
}

export { extract };
