<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Créer un contact</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-input label="Name" v-model="contact.name" placeholder="Saisir votre nom"></ion-input>
        </ion-item>
        <ion-item>
          <ion-input label="Email" v-model="contact.email" placeholder="Saisir l'adresse e-mail"></ion-input>
        </ion-item>
        <ion-item>
          <ion-input label="Phone" v-model="contact.phone" placeholder="Entrez le numéro de téléphone"></ion-input>
        </ion-item>
        <ion-button expand="full" @click="createContact">Créer nouveau contact</ion-button>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonInput, IonButton , IonBackButton } from '@ionic/vue';

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
    IonButton,
    IonBackButton
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
    createContact() {
      let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      this.contact.id = Date.now();
      contacts.push(this.contact);
      localStorage.setItem('contacts', JSON.stringify(contacts));
      this.$router.push('/');
    }
  }
};
</script>
