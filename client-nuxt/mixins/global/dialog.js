export default {
    methods: {
      async showAlert (title, message) {
        if (process.server) return;
        if (message === null || message === undefined) {
          message = title;
          title = 'Alert';
        }
        await this.$bvModal.msgBoxOk(message, {
          title,
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'primary',
          headerClass: 'p-3',
          // headerClass: 'p-2 border-bottom-0',
          // footerClass: 'p-2 border-top-0',
          centered: true
        })
      },
  
      async showWarning (title, message) {
        if (process.server) return;
        if (message === null || message === undefined) {
          message = title;
          title = 'Warning';
        }
        await this.$bvModal.msgBoxOk(message, {
          title,
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'warning',
          headerClass: 'p-3',
          // headerClass: 'p-2 border-bottom-0',
          // footerClass: 'p-2 border-top-0',
          centered: true
        })
      },
  
      async showDanger(title, message) {
        if (process.server) return;
        if (message === null || message === undefined) {
          message = title;
          title = 'Danger';
        }
        await this.$bvModal.msgBoxOk(message, {
          title,
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          headerClass: 'p-3',
          // headerClass: 'p-2 border-bottom-0',
          // footerClass: 'p-2 border-top-0',
          centered: true
        })
      },
  
      async showConfirm(title, prompt) {
        if(process.server) return;
        if (prompt === null || prompt === undefined) {
          prompt = title;
          title = 'Confirm';
        }
        return await this.$bvModal.msgBoxConfirm(prompt, {
          title,
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'primary',
          // headerClass: 'p-2 border-bottom-0',
          // footerClass: 'p-2 border-top-0',
          centered: true
        })
      }
    }
  }
  