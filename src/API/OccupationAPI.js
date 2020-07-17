import APIProxy from './APIProxy';

export default class OccupationAPI {

    
    fetchOccupationData({ data={} }) {
        return APIProxy.get({ data });
    }
}