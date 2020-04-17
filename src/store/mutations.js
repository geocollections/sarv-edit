import Vue from "vue";
import isEmpty from "lodash/isEmpty";
import {
  fetchAccessions,
  fetchAgents,
  fetchAnalyses,
  fetchAreas,
  fetchAttachments,
  fetchCollections,
  fetchDatasets, fetchDeaccessions,
  fetchDois,
  fetchDrillcoreBoxes,
  fetchDrillcores,
  fetchJournals,
  fetchKeywords,
  fetchLibrariesFromLibraryAgent, fetchLoans,
  fetchLocalities, fetchLocations,
  fetchPreparations,
  fetchProjects,
  fetchReferences, fetchRocks,
  fetchSamples, fetchSampleSeries,
  fetchSelectionSeries,
  fetchSites,
  fetchSpecimens,
  fetchStratigraphies,
  fetchTaxa, fetchVisits, fetchWebNews, fetchWebPages
} from "../assets/js/api/apiCalls";

export default {
  // into settings module start
  UPDATE_APP_SETTINGS(state, settings) {
    Vue.localStorage.set("SARV_APP_SETTINGS", settings);
    Vue.set(state, "appSettings", settings);
  },

  UPDATE_DRAWER_STATE(state, payload) {
    Vue.set(state, "drawerState", payload);
  },

  UPDATE_DRAWER_RIGHT_STATE(state, payload) {
    Vue.set(state, "drawerRightState", payload);
  },

  SET_SHORTCUTS: (state, { shortcuts }) => {
    Vue.localStorage.set("shortcuts", JSON.stringify(shortcuts));
    Vue.set(state, "shortcuts", shortcuts);
  },

  GET_SHORTCUTS: state => {
    const shortcuts = Vue.localStorage.get("shortcuts", null);

    if (
      typeof shortcuts !== "undefined" &&
      shortcuts !== null &&
      !isEmpty(shortcuts)
    ) {
      Vue.set(state, "shortcuts", JSON.parse(shortcuts));
    } else {
      Vue.set(state, "shortcuts", []);
    }
  },

  UPDATE_APP_ZOOM(state, zoomLevel) {
    Vue.set(state.accessibility, "zoom", zoomLevel);
  },
  // into settings module end



  // into search module start
  SET_ACTIVE_OBJECTS: state => {
    const activeLibrary = Vue.localStorage.get("activeLibrary", null);
    const activeProject = Vue.localStorage.get("activeProject", null);
    const activeSite = Vue.localStorage.get("activeSite", null);
    const activeSample = Vue.localStorage.get("activeSample", null);
    const activeSelectionSeries = Vue.localStorage.get(
      "activeSelectionSeries",
      null
    );

    if (activeLibrary && !isEmpty(activeLibrary))
      Vue.set(state, "activeLibrary", activeLibrary);
    if (activeProject && !isEmpty(activeProject))
      Vue.set(state, "activeProject", activeProject);
    if (activeSite && !isEmpty(activeSite))
      Vue.set(state, "activeSite", activeSite);
    if (activeSample && !isEmpty(activeSample))
      Vue.set(state, "activeSample", activeSample);
    if (activeSelectionSeries && !isEmpty(activeSelectionSeries))
      Vue.set(state, "activeSelectionSeries", activeSelectionSeries);
  },

  SET_SIDEBAR_USER_ACTION: (state, userAction) => {
    Vue.set(state, "sidebarUserAction", userAction);
  },

  SET_ACTIVE_LIBRARY: (state, object) => {
    Vue.localStorage.set("activeLibrary", object);
    Vue.set(state, "activeLibrary", object);
  },

  SET_ACTIVE_SELECTION_SERIES: (state, object) => {
    Vue.localStorage.set("activeSelectionSeries", object);
    Vue.set(state, "activeSelectionSeries", object);
  },

  SET_ACTIVE_PROJECT: (state, object) => {
    Vue.localStorage.set("activeProject", object);
    Vue.set(state, "activeProject", object);
  },

  SET_ACTIVE_SAMPLE: (state, object) => {
    Vue.localStorage.set("activeSample", object);
    Vue.set(state, "activeSample", object);
  },

  SET_ACTIVE_SITE: (state, object) => {
    Vue.localStorage.set("activeSite", object);
    Vue.set(state, "activeSite", object);
  },

  UPDATE_SEARCH_PARAMETERS(state, payload) {
    Vue.set(state.tableSearchParameters, payload.module, {
      searchParameters: payload.params,
      filters: payload.filters
    });
  },

  UPDATE_ACTIVE_TAB(state, payload) {
    Vue.set(state.activeRelatedDataTab, payload.object, payload.tab);
  },

  SET_LOADING_STATE(state, bool) {
    state.loadingState = bool;
  },

  SET_LOADING_TYPE(state, type) {
    state.loadingType = type;
  },

  SET_LOADING_PERCENT(state, percent) {
    state.loadingPercent = percent;
  },

  SET_RECENT_URLS: state => {
    const recentUrls = Vue.localStorage.get("recentUrls", null);
    const recentUrlsState = Vue.localStorage.get("recentUrlsState", false);

    if (recentUrls && !isEmpty(recentUrls))
      Vue.set(state, "recentUrls", recentUrls);
    if (typeof recentUrlsState === "boolean")
      Vue.set(state, "recentUrlsState", recentUrlsState);
  },

  UPDATE_RECENT_URLS: (state, urlObject) => {
    let recentUrls = Vue.localStorage.get("recentUrls", null);

    if (recentUrls && !isEmpty(recentUrls)) {
      recentUrls.push(urlObject);
      if (recentUrls.length > 10) recentUrls.shift();

      // If after removing is still over 10 then empty that (I don't want to use loop here);
      if (recentUrls.length > 10) recentUrls = [];
    } else {
      recentUrls = [];
      recentUrls.push(urlObject);
    }

    Vue.localStorage.set("recentUrls", recentUrls);
    Vue.set(state, "recentUrls", recentUrls);
  },

  UPDATE_RECENT_URLS_STATE: (state, boolValue) => {
    Vue.localStorage.set("recentUrlsState", boolValue);
    Vue.set(state, "recentUrlsState", boolValue);
  },

  SET_SIDEBAR_LIST: (state, { resp }) => {
    /* false means page not found */
    Vue.set(state, "sidebarList", {
      results: resp.data.results || false,
      page: resp.data.page,
      totalPages: resp.data.page ? resp.data.page.split(" of ")[1] : undefined
    });
  },

  FETCH_PROJECTS: ({ commit, state }) => {
    return fetchProjects(
      state.activeSearchParams.search,
      state.currentUser.id
    ).then(resp => commit("SET_SIDEBAR_LIST", { resp }));
  },

  FETCH_SITES: ({ commit, state }) => {
    return fetchSites(state.activeSearchParams.search).then(resp =>
      commit("SET_SIDEBAR_LIST", { resp })
    );
  },

  FETCH_ATTACHMENTS: ({ commit, state }) => {
    return fetchAttachments(
      state.activeSearchParams.search,
      state.currentUser
    ).then(resp => commit("SET_SIDEBAR_LIST", { resp }));
  },

  FETCH_REFERENCES: ({ commit, state }) => {
    return fetchReferences(state.activeSearchParams.search).then(resp =>
      commit("SET_SIDEBAR_LIST", { resp })
    );
  },

  FETCH_LIBRARIES: ({ commit, state }) => {
    return fetchLibrariesFromLibraryAgent(
      state.activeSearchParams.search,
      state.activeSearchParams.agent
    ).then(resp => commit("SET_SIDEBAR_LIST", { resp }));
  },

  FETCH_LOCALITIES: ({ commit, state }) => {
    return fetchLocalities(state.activeSearchParams.search).then(resp =>
      commit("SET_SIDEBAR_LIST", { resp })
    );
  },

  FETCH_SAMPLES: ({ commit, state }) => {
    return fetchSamples(
      state.activeSearchParams.search,
      state.activeSearchParams.databaseId
    ).then(resp => commit("SET_SIDEBAR_LIST", { resp }));
  },

  FETCH_ANALYSES: ({ commit, state }) => {
    return fetchAnalyses(
      state.activeSearchParams.search,
      state.activeSearchParams.agent,
      state.activeSearchParams.databaseId
    ).then(resp => commit("SET_SIDEBAR_LIST", { resp }));
  },

  FETCH_DOIS: ({ commit, state }) => {
    return fetchDois(
      state.activeSearchParams.search,
      state.databaseId
    ).then(resp => commit("SET_SIDEBAR_LIST", { resp }));
  },

  FETCH_SPECIMENS: ({ commit, state }) => {
    return fetchSpecimens(
      state.activeSearchParams.search,
      state.activeSearchParams.databaseId
    ).then(resp => commit("SET_SIDEBAR_LIST", { resp }));
  },

  FETCH_KEYWORDS: ({ commit, state }) => {
    return fetchKeywords(state.activeSearchParams.search).then(resp =>
      commit("SET_SIDEBAR_LIST", { resp })
    );
  },

  FETCH_JOURNALS: ({ commit, state }) => {
    return fetchJournals(state.activeSearchParams.search).then(resp =>
      commit("SET_SIDEBAR_LIST", { resp })
    );
  },

  FETCH_COLLECTIONS: ({ commit, state }) => {
    return fetchCollections(state.activeSearchParams.search).then(resp => {
      commit("SET_SIDEBAR_LIST", { resp });
    });
  },

  FETCH_TAXA: ({ commit, state }) => {
    return fetchTaxa(state.activeSearchParams.search).then(resp => {
      commit("SET_SIDEBAR_LIST", { resp });
    });
  },

  FETCH_SELECTION_SERIES: ({ commit, state }) => {
    return fetchSelectionSeries(state.activeSearchParams.search).then(resp => {
      commit("SET_SIDEBAR_LIST", { resp });
    });
  },

  FETCH_AGENTS: ({ commit, state }) => {
    return fetchAgents(state.activeSearchParams.search).then(resp => {
      commit("SET_SIDEBAR_LIST", { resp });
    });
  },

  FETCH_PREPARATIONS: ({ commit, state }) => {
    return fetchPreparations(state.activeSearchParams.search).then(resp => {
      commit("SET_SIDEBAR_LIST", { resp });
    });
  },

  FETCH_DRILLCORES: ({ commit, state }) => {
    return fetchDrillcores(state.activeSearchParams.search).then(resp => {
      commit("SET_SIDEBAR_LIST", { resp });
    });
  },

  FETCH_DATASETS: ({ commit, state }) => {
    return fetchDatasets(
      state.activeSearchParams.search,
      state.activeSearchParams.databaseId
    ).then(resp => {
      commit("SET_SIDEBAR_LIST", { resp });
    });
  },

  FETCH_STRATIGRAPHY: ({ commit, state }) => {
    return fetchStratigraphies(state.activeSearchParams.search).then(resp => {
      commit("SET_SIDEBAR_LIST", { resp });
    });
  },

  FETCH_AREAS: ({ commit, state }) => {
    return fetchAreas(state.activeSearchParams.search).then(resp => {
      commit("SET_SIDEBAR_LIST", { resp });
    });
  },

  FETCH_DRILLCORE_BOXES: ({ commit, state }) => {
    return fetchDrillcoreBoxes(state.activeSearchParams.search).then(resp => {
      commit("SET_SIDEBAR_LIST", { resp });
    });
  },

  FETCH_LOCATIONS: ({ commit, state }) => {
    return fetchLocations(state.activeSearchParams.search).then(resp => {
      commit("SET_SIDEBAR_LIST", { resp });
    });
  },

  FETCH_ROCKS: ({ commit, state }) => {
    return fetchRocks(state.activeSearchParams.search).then(resp => {
      commit("SET_SIDEBAR_LIST", { resp });
    });
  },

  FETCH_DEACCESSIONS: ({ commit, state }) => {
    return fetchDeaccessions(state.activeSearchParams.search).then(resp => {
      commit("SET_SIDEBAR_LIST", { resp });
    });
  },

  FETCH_ACCESSIONS: ({ commit, state }) => {
    return fetchAccessions(state.activeSearchParams.search).then(resp => {
      commit("SET_SIDEBAR_LIST", { resp });
    });
  },

  FETCH_VISITS: ({ commit, state }) => {
    return fetchVisits(state.activeSearchParams.search).then(resp => {
      commit("SET_SIDEBAR_LIST", { resp });
    });
  },

  FETCH_LOANS: ({ commit, state }) => {
    return fetchLoans(
      state.activeSearchParams.search,
      state.activeSearchParams.databaseId
    ).then(resp => {
      commit("SET_SIDEBAR_LIST", { resp });
    });
  },

  FETCH_WEB_PAGES: ({ commit, state }) => {
    return fetchWebPages(state.activeSearchParams.search).then(resp => {
      commit("SET_SIDEBAR_LIST", { resp });
    });
  },

  FETCH_WEB_NEWS: ({ commit, state }) => {
    return fetchWebNews(state.activeSearchParams.search).then(resp => {
      commit("SET_SIDEBAR_LIST", { resp });
    });
  },

  FETCH_SAMPLE_SERIES: ({ commit, state }) => {
    return fetchSampleSeries(state.activeSearchParams.search).then(resp => {
      commit("SET_SIDEBAR_LIST", { resp });
    });
  },

  SET_ACTIVE_SEARCH_PARAMS: (state, params) => {
    Vue.set(state, "activeSearchParams", params);
  },
  // into search module end



  // into user module start
  SET_CURRENT_USER: state => {
    const authUser = Vue.localStorage.get("authUser", null);

    let currentUser = {
      id: authUser.agent_id,
      agent: authUser.agent,
      forename: authUser.name,
      surename: authUser.surname,
      user: authUser.user
    };
    let permissions = authUser.permissions;
    let databaseId = authUser.database_id;

    if (authUser && !isEmpty(authUser)) {
      Vue.set(state, "currentUser", currentUser);
      Vue.set(state, "permissions", permissions);
      Vue.set(state, "databaseId", databaseId);
    }
  },
  // into user module end



  // into map module start
  UPDATE_MAP_STATE(state, mapState) {
    let mapSettings = Vue.localStorage.get("SARV_MAP_SETTINGS", null);

    if (mapSettings && !isEmpty(mapSettings)) {
      mapSettings.showMap = mapState;
    } else {
      mapSettings = {};
      mapSettings.showMap = mapState;
    }
    Vue.localStorage.set("SARV_MAP_SETTINGS", mapSettings);

    Vue.set(state.mapSettings, "showMap", mapState);
  },

  UPDATE_MAP_DEFAULT_LAYER(state, layerName) {
    let mapSettings = Vue.localStorage.get("SARV_MAP_SETTINGS", null);

    if (mapSettings && !isEmpty(mapSettings)) {
      mapSettings.defaultLayer = layerName;
    } else {
      mapSettings = {};
      mapSettings.defaultLayer = layerName;
    }
    Vue.localStorage.set("SARV_MAP_SETTINGS", mapSettings);

    Vue.set(state.mapSettings, "defaultLayer", layerName);
  },

  INITIALISE_MAP_SETTINGS(state) {
    let mapSettings = Vue.localStorage.get("SARV_MAP_SETTINGS");
    if (
      mapSettings &&
      Object.entries(mapSettings).length > 0 &&
      mapSettings.constructor === Object
    ) {
      Vue.set(state, "mapSettings", mapSettings);
    }
  }
  // into map module end



};
