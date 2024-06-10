<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Create Contact</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-input label="Name" v-model="contact.name"></ion-input>
        </ion-item>
        <ion-item>
          <ion-input label="Email" v-model="contact.email" placeholder="Enter email"></ion-input>
        </ion-item>
        <ion-item>
          <ion-input label="Phone" v-model="contact.phone" placeholder="Enter phone number"></ion-input>
        </ion-item>
        <ion-button expand="full" @click="createContact">Create</ion-button>
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
