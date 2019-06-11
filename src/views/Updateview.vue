<template>
  <div>
    <b-button @click="fcmupdate()">FCmUpdate</b-button>
    <b-button @click="charaupdate()">CharaUpdate</b-button>
  </div>
</template>


<script>
import firebase from "@/firebase/firestore";
import moment from "moment";
import axios from "axios";
export default {
  name: "updateview",
  methods: {
    fcmupdate: function() {
      console.log("update");
      this.getfcmemberlist();
    },
    charaupdate: function() {
      console.log("update");
      this.getallcharadatafcm();
    },
    getfcmemberlist: function() {
      console.log("getfcmemberlist");
      axios
        .get("https://xivapi.com/freecompany/9229423748854162940?data=FCM")
        .then(response => {
          console.log(response.data.FreeCompanyMembers);

          const colref = firebase
            .firestore()
            .collection("fffc")
            .doc("fcmemberlist");

          colref
            .set(response.data)
            .then(function(docRef) {
              console.log("updatecomplete");
            })
            .catch(function(error) {
              console.log("updateerror");
            });
        });
    },
    getallcharadatafcm: function() {
      console.log("getallcharadatafcm");
      var docRef = firebase
        .firestore()
        .collection("fffc")
        .doc("fcmemberlist");

      var self = this;
      docRef
        .get()
        .then(function(doc) {
          if (doc.exists) {
            var items = doc.data().FreeCompanyMembers;
            console.log(items);
            self.savenewcharadata(items);
          } else {
            console.log("not exists");
          }
        })
        .catch(function(error) {});
    },
    savenewcharadata: function(items) {
      console.log("saveitems = " + items);
      items.forEach(item => {
        var id = item.ID;

        console.log("ID = " + id);
        axios
          .get("https://xivapi.com/character/" + id + "?extended=1&language=ja")
          .then(response => {
            console.log(response.data);

            const colref = firebase
              .firestore()
              .collection("fffc")
              .doc(String(id));

            colref
              .set(response.data)
              .then(function(docRef) {
                console.log("updatecomplete");
              })
              .catch(function(error) {
                console.log("updateerror");
              });
          });
      });
    }
  }
};
</script>
