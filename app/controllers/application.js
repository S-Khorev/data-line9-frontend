import Controller from '@ember/controller';
import $ from 'jquery';
import { computed, observer } from '@ember/object';
import { isNone } from '@ember/utils';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';



export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.proto-one.caption'),
          title: i18n.t('forms.application.sitemap.proto-one.title'),
          children: [{
            link: 'data-line-data-line9-dictionary-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-dictionary-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-dictionary-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-user-service-spec-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-user-service-spec-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-user-service-spec-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-resource-characteristic-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-resource-characteristic-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-resource-characteristic-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-user-group-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-user-group-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-user-group-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-resource-spec-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-resource-spec-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-resource-spec-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-resource-spec-characteristic-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-resource-spec-characteristic-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-resource-spec-characteristic-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-service-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-service-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-service-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-product-catalog-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-product-catalog-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-product-catalog-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-role-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-role-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-role-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-order-state-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-order-state-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-order-state-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-customer-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-customer-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-customer-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-service-characteristic-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-service-characteristic-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-service-characteristic-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-resource-shared-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-resource-shared-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-resource-shared-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-service-spec-characteristic-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-service-spec-characteristic-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-service-spec-characteristic-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-resource-common-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-resource-common-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-resource-common-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-customer-acl-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-customer-acl-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-customer-acl-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-usr-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-usr-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-usr-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-order-item-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-order-item-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-order-item-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-service-spec-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-service-spec-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-service-spec-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-service-state-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-service-state-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-service-state-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-user-service-order-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-user-service-order-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-user-service-order-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-contragent-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-contragent-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-contragent-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-catalog-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-catalog-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-catalog-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-resource-characteristic-log-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-resource-characteristic-log-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-resource-characteristic-log-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-resource-log-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-resource-log-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-resource-log-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-grp-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-grp-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-grp-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-resource-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-resource-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-resource-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-user-role-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-user-role-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-user-role-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-service-spec-acl-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-service-spec-acl-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-service-spec-acl-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-service-characteristic-log-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-service-characteristic-log-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-service-characteristic-log-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-service-log-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-service-log-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-service-log-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-resource-usage-spec-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-resource-usage-spec-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-resource-usage-spec-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-cardinality-type-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-cardinality-type-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-cardinality-type-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-service-usage-spec-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-service-usage-spec-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-service-usage-spec-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-user-resource-spec-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-user-resource-spec-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-user-resource-spec-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-service-order-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-service-order-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-service-order-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-characteristic-type-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-characteristic-type-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-characteristic-type-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-dictionary-value-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-dictionary-value-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-dictionary-value-l.title'),
            children: null
          }, {
            link: 'data-line-data-line9-dba-l',
            caption: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-dba-l.caption'),
            title: i18n.t('forms.application.sitemap.proto-one.data-line-data-line9-dba-l.title'),
            children: null
          }]
        }
      ]
    };
  }),

  /**
    Locales supported by application.

    @property locales
    @type String[]
    @default ['ru', 'en']
  */
  locales: undefined,

  /**
    Handles changes in userSettingsService.isUserSettingsServiceEnabled.

    @method _userSettingsServiceChanged
    @private
  */
  _userSettingsServiceChanged: observer('userSettingsService.isUserSettingsServiceEnabled', function() {
    this.get('target.router').refresh();
  }),

  /**
    Initializes controller.
  */
  init() {
    this._super(...arguments);

    let i18n = this.get('i18n');
    if (isNone(i18n)) {
      return;
    }

    this.set('locales', ['ru', 'en']);

    // If i18n.locale is long value like 'ru-RU', 'en-GB', ... this code will return short variant 'ru', 'en', etc.
    let shortCurrentLocale = this.get('i18n.locale').split('-')[0];
    let availableLocales = A(this.get('locales'));

    // Force current locale to be one of available,
    // if browser's current language is not supported by dummy application,
    // or if browser's current locale is long value like 'ru-RU', 'en-GB', etc.
    if (!availableLocales.includes(shortCurrentLocale)) {
      i18n.set('locale', 'en');
    } else {
      i18n.set('locale', shortCurrentLocale);
    }
  },

  /**
    Service that triggers objectlistview events.

    @property objectlistviewEventsService
    @type Service
  */
  objectlistviewEventsService: service('objectlistview-events'),

  /**
    Service for managing the state of the application.

    @property appState
    @type AppStateService
  */
  appState: service(),

  actions: {
    /**
      Call `updateWidthTrigger` for `objectlistviewEventsService`.

      @method actions.updateWidth
    */
    updateWidth() {
      this.get('objectlistviewEventsService').updateWidthTrigger();
    },

    /**
      Toggles application sitemap's side bar.

      @method actions.toggleSidebar
    */
    toggleSidebar() {
      let sidebar = $('.ui.sidebar.main.menu');
      sidebar.sidebar('toggle');
      sidebar.toggleClass('sidebar-mini');

      $('.full.height').toggleClass('content-opened');

      $('.sidebar.icon .text_menu').toggleClass('hidden');
      $('.sidebar.icon').toggleClass('text-menu-show');
      $('.sidebar.icon').toggleClass('text-menu-hide');
      $('.bgw-opacity').toggleClass('hidden');

      // For reinit overflowed tabs.
      $(window).trigger('resize');
    },

    /**
      Toggles application sitemap's side bar in mobile view.

      @method actions.toggleSidebarMobile
    */
    toggleSidebarMobile() {
      $('.ui.sidebar.main.menu').sidebar('toggle');

      $('.sidebar.icon').toggleClass('text-menu-show');
      $('.sidebar.icon').toggleClass('text-menu-hide');
      $('.sidebar.icon').toggleClass('hidden-text');
      $('.bgw-opacity').toggleClass('hidden');

      if (!this.get('_hideEventIsAttached')) {
        $('.ui.sidebar.main.menu').sidebar('attach events', '.ui.sidebar.main.menu .item a', 'hide');
        this.set('_hideEventIsAttached', true);
      }
    }
  }
});
