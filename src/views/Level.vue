<template>
  <div>
    <!-- <pie-chart v-bind:cData="{labels:[10,20],datasets:[{data:[11,22]}]}" class="chart"/> -->
    <b-table dark striped hover :items="this.datas" :fields="fields"></b-table>
  </div>
</template>

<script>
import firebase from "@/firebase/firestore";

export default {
  name: "Levelpage",

  data: function() {
    return {
      fields: [
        { key: "ID", sortable: true },
        { key: "Name", sortable: true },
        { key: "Rank", sortable: true },
        { key: "Gender", sortable: true },
        { key: "Race", sortable: true },
        { key: "Tribe", sortable: true },
        { key: "GrandCompany", sortable: true },
        { key: "CompanyRank", sortable: true },
        { key: "Nameday", sortable: true },
        { key: "Town", sortable: true }
      ],
      datas: [
        {
          ID: "",
          Name: "",
          Rank: "",
          Gender: "",
          Race: "",
          Tribe: "",
          GrandCompany: "",
          CompanyRank: "",
          Nameday: "",
          Town: ""
        }
      ]
    };
  },
  mounted() {
    this.setcharadata();
  },
  methods: {
    setcharadata: function() {
      console.log("setcharadata");

      var docRef = firebase
        .firestore()
        .collection("fffc")
        .doc("fcmemberlist");

      var self = this;

      docRef
        .get()
        .then(function(doc) {
          if (doc.exists) {
            var items = doc.data();
            console.log(items);
            var i = 0;
            var arr = [];

            items.FreeCompanyMembers.forEach(item => {
              console.log(item);

              var id = item.ID;

              var idRef = firebase
                .firestore()
                .collection("fffc")
                .doc(String(id));

              idRef
                .get()
                .then(function(doc) {
                  if (doc.exists) {
                    var cdata = doc.data();
                    var tempgen;
                    if (cdata.Character.Gender == 1) {
                      tempgen = "男性";
                    } else {
                      tempgen = "女性";
                    }

                    arr.splice(i, 1, {
                      ID: id,
                      Name: cdata.Character.Name,
                      Rank: item.Rank,
                      Gender: tempgen,
                      Race: cdata.Character.Race.Name,
                      Tribe: cdata.Character.Tribe.Name,
                      Nameday: cdata.Character.Nameday,
                      Town: cdata.Character.Town.Name,
                      GrandCompany: cdata.Character.GrandCompany.Company.Name,
                      CompanyRank: cdata.Character.GrandCompany.Rank.Name
                    });

                    i = i + 1;
                  } else {
                    console.log("No such document!");
                    return null;
                  }
                })
                .catch(function(error) {
                  console.log("Error getting document:", error);
                  return null;
                });
            });

            self.datas = arr;
          } else {
            console.log("No such document!");
          }
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
        });
    }
  }
};
</script>


