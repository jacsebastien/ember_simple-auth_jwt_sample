import Ember from 'ember';

export default Ember.Service.extend({
    session: Ember.inject.service(),

    // sample method which include JWT in header
    sampleRequest() {
        return new Ember.RSVP.Promise((resolve, reject) => {
            this.get('session').authorize('authorizer:custom', (headerName, headerValue) => { 
                Ember.$.ajax('http://my-url/api/sampleMethod', {
                    method: "POST",
                    data: {
                        message: "hello world"
                    },
                    contentType: 'application/json;charset=utf-8',
                    dataType: 'json',
                    headers: { [headerName]: headerValue },
                    success(response) {
                        resolve(response);
                    },
                    error(reason) {               
                        reject(reason);
                    }
                });
            });
        });    
    },
});
