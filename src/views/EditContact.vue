<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Modifier le contact</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item>
            <ion-input label="Name" v-model="contact.name"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label="Email" v-model="contact.email" placeholder="Saisir l'adresse e-mail"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label="Phone" v-model="contact.phone" placeholder="Entrez le numéro de téléphone"></ion-input>
          </ion-item>
          <ion-button expand="full" @click="updateContact">mettre à jour</ion-button>
        </ion-list>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonInput, IonButton } from '@ionic/vue';
  
  export default {
    components: {
      IonPage,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonList,
      IonItem,
      IonInput,
      IonButton
    },
    data() {
      return {
        contact: {
          id: null,
          name: '',
          email: '',
          phone: ''
        }
      };
    },
    methods: {
      loadContact() {
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        const contact = contacts.find(c => c.id === parseInt(this.$route.params.id));
        if (contact) {
          this.contact = contact;
        }
      },
      updateContact() {
        let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        const index = contacts.findIndex(c => c.id === this.contact.id);
        if (index !== -1) {
          contacts.splice(index, 1, this.contact);
          localStorage.setItem('contacts', JSON.stringify(contacts));
        }
        this.$router.push('/');
      }
    },
    created() {
      this.loadContact();
    }
  };
  </script>
  