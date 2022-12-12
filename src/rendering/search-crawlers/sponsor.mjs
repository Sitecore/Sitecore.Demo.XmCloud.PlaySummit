function extract(request, response) {
  function validateData(data, acceptPageType) {
    const { query: { path: [pageType] = [] } = {} } = data;

    return pageType === acceptPageType;
  }

  function getDisplayNameList(list) {
    return list.map(({ displayName }) => displayName);
  }

  function getTargetItemsList(obj) {
    return obj ? obj.targetItems.map(({ name: { value } }) => value) : [];
  }

  function buildTargetItemsList(list = [], set) {
    return [...new Set(list.concat(getTargetItemsList(set)))];
  }

  function extractSessionsData(sessions) {
    return sessions.reduce(
      (mem, { rooms, day, timeslots }) => ({
        ...mem,
        rooms: buildTargetItemsList(mem.rooms, rooms),
        days: buildTargetItemsList(mem.days, day),
        time_slots: buildTargetItemsList(mem.time_slots, timeslots),
      }),
      {}
    );
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
      fields: { Logo, Sessions, Speakers, Level },
      placeholders: {
        'headless-main': [
          {
            placeholders: {
              'sxa-sponsor-content': [
                _,
                {
                  fields: {
                    data: {
                      contextItem: { sessions },
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    } = data;

    const description = $('.section-content .rich-text').text();
    const { value: { thumbnailsrc: image_thumb_url, src: image_url } = {} } = Logo;
    const { value: level } = Level;
    const speakers = getDisplayNameList(Speakers);

    return [
      {
        type: 'sponsor',
        id: itemId,
        name: displayName,
        description,
        image_thumb_url,
        image_url,
        url: urlPath,
        speakers,
        level,
        sessions: getDisplayNameList(Sessions),
        ...extractSessionsData(sessions.targetItems),
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
    return processData(data, 'sponsors');
  } catch (e) {
    return [];
  }
}

export { extract };
