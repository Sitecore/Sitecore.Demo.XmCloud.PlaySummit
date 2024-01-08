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
      fields: { Picture, Featured, Company, Location, JobTitle, Sessions },
    } = data;

    const description = $('.section-content .rich-text').text();
    const {
      value: {
        thumbnailsrc: image_thumb_url,
        src: image_url,
        alt: imageDescription,
        'stylelabs-content-id': imageID,
      } = {},
    } = Picture;
    const { value: is_featured } = Featured;
    const { value: location } = Location;
    const { value: job_title } = JobTitle;
    const { value: company } = Company;

    const days = [...new Set([...$('.session-info-date')].map((e) => $(e).text().trim()))];
    const time_slots = [...new Set([...$('.session-info-time')].map((e) => $(e).text().trim()))];
    const rooms = [
      ...new Set(
        [
          ...$('div.info-col-content > div.info-text > span:nth-child(2):not(.session-info-time)'),
        ].map((e) => $(e).text().trim())
      ),
    ];

    return [
      {
        description,
        image_thumb_url,
        image_url,
        location,
        job_title,
        is_featured,
        company,
        days,
        time_slots,
        rooms,
        type: 'speaker',
        id: itemId,
        name: displayName,
        url: urlPath,
        sessions: getDisplayNameList(Sessions),
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
    return processData(data, 'speakers');
  } catch (e) {
    return [];
  }
}

export { extract };
