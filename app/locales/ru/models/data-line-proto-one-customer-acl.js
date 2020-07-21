export default {
  projections: {
    customer_aclE: {
      aCreate: {
        __caption__: 'A_create'
      },
      aRead: {
        __caption__: 'A_read'
      },
      aUpdate: {
        __caption__: 'A_update'
      },
      aDelete: {
        __caption__: 'A_delete'
      },
      group_id: {
        __caption__: 'Group_id',
        name: {
          __caption__: 'Name'
        }
      },
      customerId: {
        __caption__: 'Customer_id',
        name: {
          __caption__: ''
        }
      }
    },
    customer_aclL: {
      aCreate: {
        __caption__: 'A_create'
      },
      aRead: {
        __caption__: 'A_read'
      },
      aUpdate: {
        __caption__: 'A_update'
      },
      aDelete: {
        __caption__: 'A_delete'
      },
      group_id: {
        __caption__: 'Name',
        name: {
          __caption__: 'Name'
        }
      },
      customerId: {
        __caption__: '',
        name: {
          __caption__: ''
        }
      }
    }
  },
  validations: {
    aCreate: {
      __caption__: 'A_create'
    },
    aRead: {
      __caption__: 'A_read'
    },
    aUpdate: {
      __caption__: 'A_update'
    },
    aDelete: {
      __caption__: 'A_delete'
    },
    group_id: {
      __caption__: 'Group_id'
    },
    customerId: {
      __caption__: 'Customer_id'
    }
  }
};
