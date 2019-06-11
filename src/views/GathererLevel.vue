<template>
  <div>
    <!-- <pie-chart v-bind:cData="{labels:[10,20],datasets:[{data:[11,22]}]}" class="chart"/> -->
    <b-table dark striped hover :items="this.datas" :fields="fields"></b-table>
  </div>
</template>

<script>
import firebase from "@/firebase/firestore";

// import PieChart from "@/components/PieChart";
export default {
  name: "GathererLevel",

  data: function() {
    return {
      fields: [
        { key: "Name", sortable: true },

        { key: "CRP", label: "木工師", sortable: true },
        { key: "BSM", label: "鍛治師", sortable: true },

        { key: "GSM", label: "彫金師", sortable: true },
        { key: "ARM", label: "甲冑師", sortable: true },

        { key: "LTW", label: "革細工師", sortable: true },
        { key: "WVR", label: "裁縫師", sortable: true },
        { key: "ALC", label: "錬金術師", sortable: true },
        { key: "CUL", label: "調理師", sortable: true },

        { key: "MIN", label: "採掘師", sortable: true },
        { key: "BTN", label: "園芸師", sortable: true },
        { key: "FSH", label: "漁師", sortable: true }
      ],
      datas: [
        {
          Name: "",
          CRP: "",
          BSM: "",
          GSM: "",
          ARM: "",
          LTW: "",
          WVR: "",
          ALC: "",
          CUL: "",
          MIN: "",
          BTN: "",
          FSH: ""
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
              console.log(item.ID);

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

                    arr.splice(i, 1, {
                      Name: cdata.Character.Name,

                      ARM: cdata.Character.ClassJobs["10_10"].Level,
                      GSM: cdata.Character.ClassJobs["11_11"].Level,
                      LTW: cdata.Character.ClassJobs["12_12"].Level,
                      WVR: cdata.Character.ClassJobs["13_13"].Level,
                      ALC: cdata.Character.ClassJobs["14_14"].Level,

                      CUL: cdata.Character.ClassJobs["15_15"].Level,
                      MIN: cdata.Character.ClassJobs["16_16"].Level,
                      BTN: cdata.Character.ClassJobs["17_17"].Level,
                      FSH: cdata.Character.ClassJobs["18_18"].Level,

                      CRP: cdata.Character.ClassJobs["8_8"].Level, //木工
                      BSM: cdata.Character.ClassJobs["9_9"].Level //鍛冶
                    });

                    //.log(cdata.Character.ClassJobs["10_10"].Level);

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


