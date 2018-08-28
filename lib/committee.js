const client = require('./api-client');

exports.details = (params) => {
	let path = '/committee/' + params.committee_id;
	delete params.committee_id;
  return client.makeApiCall(path, params);
};

exports.history = (params) => {
	let path = '/committee/' + params.committee_id + '/history/';
	delete params.committee_id;
  return client.makeApiCall(path, params);
};

exports.historyForCycle = (params) => {
	let path = '/committee/' + params.committee_id; + '/history/' + params.cycle
	delete params.committee_id;
	delete params.cycle;
  return client.makeApiCall(path, params);
};

exports.listAll = (params) => {
  let path = '/committees/';
  return client.makeApiCall(path, params);
};

exports.searchByName = (params) => {
	let path = '/names/committees/'
	return client.makeApiCall(path, params);
};

exports.communicationCosts = (params) => {
	let path = '/committee/' + params.committee_id + '/communication_costs/by_candidate/';
	delete params.committee_id;
  return client.makeApiCall(path, params);
};

exports.electioneeringCosts = (params) => {
	let path = '/committee/' + params.committee_id + '/electioneering_costs/by_candidate/';
	delete params.committee_id;
  return client.makeApiCall(path, params);
};

exports.committeeReceiptsByEmployer = (params) => {
        let path = '/committee/' + params.committee_id + '/schedules/schedule_a/by_employer/';
        delete params.committee_id;
  return client.makeApiCall(path, params);
};

exports.committeeReceiptsByOccupation = (params) => {
        let path = '/committee/' + params.committee_id + '/schedules/schedule_a/by_occupation/';
        delete params.committee_id;
  return client.makeApiCall(path, params);
};

exports.committeeReceiptsBySize = (params) => {
        let path = '/committee/' + params.committee_id + '/schedules/schedule_a/by_size/';
        delete params.committee_id;
  return client.makeApiCall(path, params);
};

exports.committeeReceiptsByState = (params) => {
        let path = '/committee/' + params.committee_id + '/schedules/schedule_a/by_state/';
        delete params.committee_id;
  return client.makeApiCall(path, params);
};

exports.committeeReceiptsByZip = (params) => {
        let path = '/committee/' + params.committee_id + '/schedules/schedule_a/by_zip/';
        delete params.committee_id;
  return client.makeApiCall(path, params);
};

