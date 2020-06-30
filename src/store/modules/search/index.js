import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const state = {
  loadingState: false,
  loadingType: "fetch",
  loadingPercent: 0,
  sidebarList: [],
  activeObject: null,
  sidebarUserAction: null,
  activeLibrary: null,
  activeProject: null,
  activeSample: null,
  activeSite: null,
  activeSelectionSeries: null,
  activeRelatedDataTab: {},
  activeSearchParams: null,
  activeSearchParametersFilters: [],
  attachmentSearchParameters: {
    id: null,
    image_number: null,
    filename: null,
    specimen: null,
    imageInfo: null,
    locality: null,
    selection: null,
    keyword: null,
    author: null,
    specimen_image_attachment: ["2", "1", "3", "4"],
    page: 1,
    paginateBy: 50,
    sortBy: ["id"],
    sortDesc: [true]
  },
  attachmentViewType: "table",
  referenceSearchParameters: {
    author: null,
    year: null,
    title: null,
    bookJournal: null,
    abstractRemarks: null,
    keywords: null,
    id: null,
    libraryAuthorIdTitle: null,
    userAdded: null,
    isEstonianReference: null,
    isEstonianAuthor: null,
    solrSearch: null,
    page: 1,
    paginateBy: 50,
    sortBy: ["id"],
    sortDesc: [true]
  },
  referenceViewType: "table",
  selection_seriesSearchParameters: {
    id: null,
    name: null,
    remarks: null,
    user_added: null,
    page: 1,
    paginateBy: 50,
    sortBy: ["id"],
    sortDesc: [true]
  },
  selection_seriesViewType: "table",
  librarySearchParameters: {
    author_txt: null,
    year: null,
    title: null,
    reference: null,
    id: null,
    page: 1,
    paginateBy: 50,
    sortBy: ["library"],
    sortDesc: [true]
  },
  libraryViewType: "table",
  journalSearchParameters: {
    journal: null,
    publisher: null,
    remarks: null,
    page: 1,
    paginateBy: 50,
    sortBy: ["id"],
    sortDesc: [true]
  },
  journalViewType: "table",
  keywordSearchParameters: {
    id: null,
    term: null,
    language: null,
    keyword_category: null,
    is_primary: null,
    page: 1,
    paginateBy: 10,
    sortBy: ["id"],
    sortDesc: [true]
  },
  keywordViewType: "table",
  doiSearchParameters: {
    identifier: null,
    creators: null,
    publication_year: null,
    title: null,
    page: 1,
    paginateBy: 50,
    sortBy: ["id"],
    sortDesc: [true]
  },
  doiViewType: "table",
  projectSearchParameters: {
    name: null,
    id: null,
    page: 1,
    paginateBy: 50,
    sortBy: ["id"],
    sortDesc: [true]
  },
  projectViewType: "table",
  siteSearchParameters: {
    id: null,
    name: null,
    number: null,
    project: null,
    date_start: null,
    date_end: null,
    page: 1,
    paginateBy: 10,
    sortBy: ["id"],
    sortDesc: [true]
  },
  siteViewType: "table",
  site_groundwaterSearchParameters: {
    site: null,
    type_txt: null,
    aquifer_system: null,
    aquifer: null,
    well_depth: null,
    filter_type: null,
    filter_top: null,
    filter_top_z: null,
    filter_bottom: null,
    filter_bottom_z: null,
    url_veka: null,
    remarks: null,
    page: 1,
    paginateBy: 50,
    sortBy: ["id"],
    sortDesc: [true]
  },
  site_groundwaterViewType: "table",
  areaSearchParameters: {
    name: null,
    type: null,
    area_ha: null,
    maakond: null,
    page: 1,
    paginateBy: 10,
    sortBy: ["name"],
    sortDesc: [true]
  },
  areaViewType: "table",
  localitySearchParameters: {
    locality: null,
    number: null,
    county: null,
    country: null,
    agent: null,
    id: null,
    selectionId: null,
    selection: null,
    page: 1,
    paginateBy: 50,
    sortBy: ["id"],
    sortDesc: [true]
  },
  localityViewType: "table",
  stratigraphySearchParameters: {
    id: null,
    stratigraphy: null,
    type: null,
    rank: null,
    scope: null,
    parent: null,
    page: 1,
    paginateBy: 10,
    sortBy: ["id"],
    sortDesc: [true]
  },
  stratigraphyViewType: "table",
  sampleSearchParameters: {
    locality: null,
    number: null,
    depth: null,
    stratigraphy: null,
    agent: null,
    storage: null,
    site: null,
    selectionId: null,
    selection: null,
    id: null,
    loan: null,
    page: 1,
    paginateBy: 50,
    sortBy: ["id"],
    sortDesc: [true]
  },
  sampleViewType: "table",
  isSampleSimpleView: false,
  sample_seriesSearchParameters: {
    name: null,
    locality: null,
    agent_collected: null,
    page: 1,
    paginateBy: 50,
    sortBy: ["id"],
    sortDesc: [true]
  },
  sample_seriesViewType: "table",
  analysisSearchParameters: {
    id: null,
    analysis_method: null,
    agentAndLab: null,
    selectionId: null,
    selection: null,
    sample: null,
    datasetId: null,
    page: 1,
    paginateBy: 50,
    sortBy: ["id"],
    sortDesc: [true]
  },
  analysisViewType: "table",
  preparationSearchParameters: {
    preparation_number: null,
    page: 1,
    paginateBy: 50,
    sortBy: ["id"],
    sortDesc: [true]
  },
  preparationViewType: "table",
  taxonSearchParameters: {
    id: null,
    taxon: null,
    author_year: null,
    taxon_epithet: null,
    parent__taxon: null,
    selectionId: null,
    selection: null,
    page: 1,
    paginateBy: 50,
    sortBy: ["id"],
    sortDesc: [true]
  },
  taxonViewType: "table",
  rockSearchParameters: {
    name: null,
    name_en: null,
    formula: null,
    rock_type: null,
    rock_rank: null,
    in_portal: null,
    in_estonia: null,
    user_changed: null,
    page: 1,
    paginateBy: 10,
    sortBy: ["name"],
    sortDesc: [true]
  },
  rockViewType: "table",
  specimenSearchParameters: {
    idSpecimen: null,
    specimenNr: null,
    collNumber: null,
    fossil: null,
    mineralRock: null,
    locality: null,
    stratigraphy: null,
    agent_collected: null,
    storage: null,
    selectionId: null,
    selection: null,
    loan: null,
    page: 1,
    paginateBy: 50,
    sortBy: ["id"],
    sortDesc: [true]
  },
  specimenViewType: "table",
  collectionSearchParameters: {
    id: null,
    number: null,
    name: null,
    agent: null,
    locality: null,
    reference: null,
    page: 1,
    paginateBy: 50,
    sortBy: ["collection_id"],
    sortDesc: [true]
  },
  collectionViewType: "table",
  locationSearchParameters: {
    id: null,
    location: null,
    location_location: null,
    stratigraphy_free: null,
    agent: null,
    contents: null,
    page: 1,
    paginateBy: 10,
    sortBy: ["id"],
    sortDesc: [true]
  },
  locationViewType: "table",
  agentSearchParameters: {
    id: null,
    agent: null,
    forename: null,
    surename: null,
    page: 1,
    paginateBy: 50,
    sortBy: ["agent"],
    sortDesc: [false]
  },
  agentViewType: "table",
  drillcoreSearchParameters: {
    drillcore: null,
    boxes: null,
    locality: null,
    storage: null,
    page: 1,
    paginateBy: 50,
    sortBy: ["id"],
    sortDesc: [true]
  },
  drillcoreViewType: "table",
  drillcore_boxSearchParameters: {
    storage: null,
    drillcore: null,
    page: 1,
    paginateBy: 10,
    sortBy: ["drillcore"],
    sortDesc: [true]
  },
  drillcore_boxViewType: "table",
  datasetSearchParameters: {
    name: null,
    owner: null,
    date: null,
    remarks: null,
    page: 1,
    paginateBy: 50,
    sortBy: ["id"],
    sortDesc: [true]
  },
  datasetViewType: "table",
  visitSearchParameters: {
    visitor: null,
    date_arrived: null,
    date_left: null,
    page: 1,
    paginateBy: 50,
    sortBy: ["id"],
    sortDesc: [true]
  },
  visitViewType: "table",
  loanSearchParameters: {
    loan_number: null,
    project: null,
    borrower: null,
    date_start: null,
    date_end: null,
    isActive: null,
    page: 1,
    paginateBy: 50,
    sortBy: ["id"],
    sortDesc: [true]
  },
  loanViewType: "table",
  accessionSearchParameters: {
    number: null,
    description: null,
    page: 1,
    paginateBy: 50,
    sortBy: ["number"],
    sortDesc: [true]
  },
  accessionViewType: "table",
  deaccessionSearchParameters: {
    number: null,
    description: null,
    page: 1,
    paginateBy: 50,
    sortBy: ["number"],
    sortDesc: [true]
  },
  deaccessionViewType: "table",
  web_newsSearchParameters: {
    page: 1,
    paginateBy: 50,
    sortBy: ["id"],
    sortDesc: [true]
  },
  web_newsViewType: "table",
  web_pagesSearchParameters: {
    page: 1,
    paginateBy: 50,
    sortBy: ["id"],
    sortDesc: [true]
  },
  web_pagesViewType: "table",
  sarv_issueSearchParameters: {
    title: null,
    description: null,
    from_user: null,
    page: 1,
    paginateBy: 50,
    sortBy: ["response"],
    sortDesc: [true]
  },
  sarv_issueViewType: "table",
  activeSarvIssues: null,
  lookUpTypes: [
    //exact, iexact, in, range, contains, icontains, startswith, istartswith, endswith, iendswith, gt, lt, gte, lte, isnull, hierarchy
    { text: "main.iexact", value: "iexact", symbol: "=" },
    { text: "main.icontains", value: "icontains", symbol: "*" },
    { text: "main.istartswith", value: "istartswith", symbol: "*=" },
    { text: "main.iendswith", value: "iendswith", symbol: "*=" },
    { text: "main.gte", value: "gte", symbol: ">" },
    { text: "main.lte", value: "lte", symbol: "<" },
    { text: "main.between", value: "range", symbol: "<>" },
    { text: "main.doesnotequal", value: "iexact!", symbol: "!=" },
    { text: "main.doesnotcontain", value: "icontains!", symbol: "!*" }
  ],
  activeSelectionSeriesList: null,
  activeLibraryList: null
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
