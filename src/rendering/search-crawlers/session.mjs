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
      fields: { Timeslots, Rooms, Image, Speakers, Sponsors, Audience, Vendors, Day, Premium },
    } = data;

    const description = $('.section-content .rich-text').text();
    const {
      value: {
        thumbnailsrc: image_thumb_url,
        src: image_url,
        alt: imageDescription,
        'stylelabs-content-id': imageID,
      } = {},
    } = Image;
    const { value: is_premium } = Premium;
    const time_slots = getDisplayNameList(Timeslots);
    const duration = time_slots.length;

    return [
      {
        description,
        image_thumb_url,
        image_url,
        is_premium,
        time_slots,
        duration,
        type: 'session',
        id: itemId,
        name: displayName,
        url: urlPath,
        rooms: getDisplayNameList(Rooms),
        speakers: getDisplayNameList(Speakers),
        vendors: getDisplayNameList(Vendors),
        sponsors: getDisplayNameList(Sponsors),
        audience: getDisplayNameList(Audience),
        days: getDisplayNameList(Day),
        start_time: time_slots[0],
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

  try {
    return processData(JSON.parse(dataNode.html()), 'sessions');
  } catch (e) {
    return [];
  }
}

export { extract };
