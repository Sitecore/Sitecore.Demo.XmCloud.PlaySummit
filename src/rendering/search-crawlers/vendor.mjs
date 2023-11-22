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
      fields: { Logo, Sessions, ActivityType, Speakers, Level },
    } = data;

    const description = $('.section-content .rich-text').text();
    const { value: { thumbnailsrc: image_thumb_url, src: image_url } = {} } = Logo;
    const { value: level } = Level;
    const activities = getDisplayNameList(ActivityType);
    const speakers = getDisplayNameList(Speakers);

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
        activities,
        speakers,
        level,
        rooms,
        days,
        time_slots,
        type: 'vendor',
        id: itemId,
        name: displayName,
        url: urlPath,
        sessions: getDisplayNameList(Sessions),
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
