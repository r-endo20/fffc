<template>
  <div>
    <b-table dark striped hover :items="this.FreeCompanyMembers" :fields="fields">
      <template slot="Name">
        <!-- `data.value` is the value after formatted by the Formatter -->
        <a :href="11">{{ data.value }}</a> -->
      </template>
    </b-table>
  </div>
</template>

<script>
import firebase from "@/firebase/firestore";

//import axios from "axios";
export default {
  name: "Mainpage",
  data: function() {
    return {
      fields: [
        { key: "Name", sortable: true },
        { key: "Rank", sortable: true },
        { key: "ID", label: "ID", sortable: true }
      ],
      FreeCompanyMembers: [
        {
          Avatar: "",
          FeastMatch: "",
          ID: "",
          Name: "",
          Rank: "",
          RankIcon: "",
          Server: ""
        }
      ],

      updatetime: ""
    };
  },
  mounted() {
    //this.getfcmemberlist();
    this.setfcmemberlist();
  },
  methods: {
    setfcmemberlist: function() {
      console.log("setfcmemberlist");
      var docRef = firebase
        .firestore()
        .collection("fffc")
        .doc("fcmemberlist");

      var self = this;

      docRef
        .get()
        .then(function(doc) {
          if (doc.exists) {
            console.log(doc.data().FreeCompanyMembers);
            self.FreeCompanyMembers = doc.data().FreeCompanyMembers;
          } else {
            console.log("No such document!");
          }
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
        });
    },

    // getfcmemberlist: function() {
    //   console.log("getfcmemberlist");
    //   axios
    //     .get("https://xivapi.com/freecompany/9229423748854162940?data=FCM")
    //     .then(response => {
    //       console.log(response.data.FreeCompanyMembers);

    //       const colref = firebase
    //         .firestore()
    //         .collection("fffc")
    //         .doc("fcmemberlist");

    //       colref
    //         .set(response.data)
    //         .then(function(colref) {
    //           console.log("updatecomplete");
    //         })
    //         .catch(function(error) {
    //           console.log("updateerror");
    //         });
    //     });
    // },

    // updatelastupdatetime: function() {
    //   this.updatetime = moment(new Date()).format("YYYY/MM/DD HH:mm");

    //   const colref = firebase
    //     .firestore()
    //     .collection("fffc")
    //     .doc("lastupdatetime_db");
    //   console.log("colref");
    //   colref
    //     .set({ updatetime: this.updatetime })
    //     .then(function(docRef) {})
    //     .catch(function(error) {
    //       console.error("Error adding document: ", error);
    //     });
    // },

    getlastupdatetime: function() {
      const colref = firebase
        .firestore()
        .collection("fffc")
        .doc("lastupdatetime_db"); // "formcontent"という名前のコレクションへの参照を作成

      colref
        .get()
        .then(function(doc) {
          if (doc.exists) {
            return doc.data().updatetime;
          } else {
            return null;
          }
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
        });
    }
  }
};
</script>

