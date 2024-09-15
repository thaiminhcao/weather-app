//                      /*q param */
// Query parameter based on which data is sent back. It could be following:
// Latitude and Longitude (Decimal degree) e.g: q=48.8567,2.3508
// city name e.g.: q=Paris
// US zip e.g.: q=10001
// UK postcode e.g: q=SW1
// Canada postal code e.g: q=G2J
// metar:<metar code> e.g: q=metar:EGLL
// iata:<3 digit airport code> e.g: q=iata:DXB
// auto:ip IP lookup e.g: q=auto:ip
// IP address (IPv4 and IPv6 supported) e.g: q=100.0.0.1
// By ID returned from Search API. e.g: q=id:2801268
// bulk New

//                      *days param */
//Required only with forecast API method.
// Number of days of forecast required.
// days parameter value ranges between 1 and 14. e.g: days=5
// If no days parameter is provided then only today's weather is returned.

//                      *dt param */
//Required only with forecast API method.
// Number of days of forecast required.
// days parameter value ranges between 1 and 14. e.g: days=5
// If no days parameter is provided then only today's weather is returned.

//                      *unixdt param */
// Unix Timestamp used by Forecast and History API method.
// unixdt has same restriction as 'dt' parameter. Please either pass 'dt'
//  or 'unixdt' and not both in same request. e.g.: unixdt=1490227200

//                      *end_dt param */
//Restrict date output for History API method.
// For history API 'end_dt' should be on or after 1st Jan, 2010 in yyyy-MM-dd format (i.e. dt=2010-01-01)
// 'end_dt' should be greater than 'dt' parameter and difference should not be more than 30 days between the two dates.
// Only works for API on Pro plan and above.

//                      *unixend_dt param */
// Unix Timestamp used by History API method.
// unixend_dt has same restriction as 'end_dt' parameter.
// Please either pass 'end_dt' or 'unixend_dt' and not both in same request. e.g.: unixend_dt=1490227200

//                      *hour param */
// Restricting forecast or history output to a specific hour in a given day.
// Must be in 24 hour. For example 5 pm should be hour=17, 6 am as hour=6

//                      *alerts param */
// 	Returns 'condition:text' field in API in the desired language eg:lang=fr

export type Params = {
  key: `65ac269c8a5b4949bd1143432240109`;
  q: unknown;
  days?: number;
  dt?: string;
  unixdt?: number;
  end_dt?: string;
  unixend_dt?: number;
  hour?: number;
  alerts?: string;
  lang?: string;
};
