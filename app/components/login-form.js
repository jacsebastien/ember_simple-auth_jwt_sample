import Ember from 'ember';

export default Ember.Component.extend({
    session: Ember.inject.service(),
    authenticator: 'authenticator:custom',

    errorMessage: null,

    actions: {
        authenticate() {
            let credentials = this.getProperties('email', 'password');
            this.get('session').authenticate('authenticator:custom', credentials).catch((message) => {
                this.set('errorMessage', message);
            });
        }
    }
});
