import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
    authorize(jqXHR, requestOptions) {
        let accessToken = this.get('session.content.secure.token');
        if (this.get('session.isAuthenticated') && !Ember.isEmpty(accessToken)) {
            jqXHR.setRequestHeader('Authorization', 'Bearer ' + accessToken);
        }
    }
});
