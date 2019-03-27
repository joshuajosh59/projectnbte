<template>
  <div id="institution">
    <b-row>
      <div class="top-display">
        <b style="margin-left: 10px; font-size: 20px" class="montserrat">Add Institution</b>
      </div>
    </b-row>
    <br>
    <div style="margin-top: 20px; color: #333333; font-size: 15px; font-family: montserrat">
      <b-form class="addNewInstitution" @submit.prevent="addInstitution">
        <b-form-group label="Institution name" label-for="name">
          <b-form-input
            id="name"
            :class="errorName"
            v-model="schoolInfo.name"
            type="text"
            placeholder="Kaduna Polytechnic"
          />
        </b-form-group>

        <b-form-group id="exampleInputGroup2" label="About Institution" label-for="textarea">
          <b-form-textarea
            id="textarea"
            v-model="schoolInfo.about"
            :class="errorAbout"
            placeholder="Enter a brief description..."
            rows="8"
          />
        </b-form-group>
        <b-row>
          <b-col md="4">
            <b-form-group label="Address" label-for="address">
              <b-form-input
                id="address"
                v-model="schoolInfo.address"
                :class="errorAdd"
                type="text"
                placeholder="Enter Address.."
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group label="State" label-for="address">
              <b-form-select :class="errorState" v-model="schoolInfo.state" :options="states"/>
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group label="Location" label-for="address">
              <b-form-input
                id="address"
                type="text"
                v-model="schoolInfo.location"
                :class="errorLocation"
                placeholder="Enter location e.g Ajah"
              />
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="4">
            <b-form-group label="Category" label-for="cat" label-align="center">
              <b-form-select
                :class="errorCategory"
                v-model="schoolInfo.category"
                :options="options"
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group label="Ownership" label-for="ownership" label-align="center">
              <b-form-select
                :class="errorOwnership"
                v-model="schoolInfo.ownership"
                :options="options1"
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group label="Year of Establishment" label-for="address">
              <b-form-input
                id="address"
                type="number"
                v-model="schoolInfo.year_established"
                :class="errorYoe"
                placeholder="Enter year e.g 1992"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12">
            <h6 class="seperator">Contact Information</h6>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4">
            <b-form-group label="Email" label-for="email" label-align="center">
              <b-form-input
                id="email"
                type="email"
                v-model="schoolInfo.email"
                :class="errorEmail"
                placeholder="Enter email..."
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group label="Website" label-for="website" label-align="center">
              <b-form-input
                id="website"
                type="url"
                v-model="schoolInfo.website"
                :class="errorWeb"
                placeholder="Enter website..."
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group label="Phone Number" label-for="phone" label-align="center">
              <b-form-input
                id="phone"
                type="number"
                v-model="schoolInfo.phone"
                :class="errorPhone"
                placeholder="Enter Phone..."
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12">
            <h6 class="seperator">Social Media</h6>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4">
            <b-form-group label="Facebook" label-for="facebook" label-align="center">
              <b-form-input
                id="facebook"
                type="text"
                v-model="schoolInfo.facebook"
                :class="errorFb"
                placeholder="Enter Facebook Username..."
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group label="Twitter" label-for="twitter" label-align="center">
              <b-form-input
                id="twitter"
                type="text"
                v-model="schoolInfo.twitter"
                :class="errorTwitter"
                placeholder="Enter Twitter Username..."
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group label="Instagram" label-for="instagram" label-align="center">
              <b-form-input
                id="instagram"
                type="text"
                v-model="schoolInfo.instagram"
                :class="errorInsta"
                placeholder="Enter Instagram Username..."
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12">
            <h6 class="seperator">Programmes</h6>
          </b-col>
        </b-row>
        <b-row v-for="(programme, index) in schoolInfo.programs" :key="programme.name">
          <b-col md="12">
            <b @click="removeProgramme(index)">x</b>
          </b-col>
          <b-col md="4">
            <b-form-group label="Name" label-for="pName" label-align="center">
              <b-form-select :class="errorProgId" v-model="programme.program_id" :options="opt"/>
            </b-form-group>
          </b-col>
          <b-col md="2">
            <b-form-group label="Mode" label-for="mode" label-align="center">
              <b-form-select :class="errorProgMode" v-model="programme.mode" :options="mode"/>
            </b-form-group>
          </b-col>
          <b-col md="2">
            <b-form-group label="Type" label-for="type" label-align="center">
              <b-form-select :class="errorProgType" v-model="programme.type" :options="type"/>
            </b-form-group>
          </b-col>
          <b-col md="2">
            <b-form-group label="Female" label-for="fm" label-align="center">
              <b-form-input
                id="fm"
                type="number"
                v-model="programme.female"
                :class="errorProgF"
                placeholder="Total Female"
              />
            </b-form-group>
          </b-col>
          <b-col md="2">
            <b-form-group label="Male" label-for="ml" label-align="center">
              <b-form-input
                id="ml"
                type="number"
                v-model="programme.male"
                :class="errorProgM"
                placeholder="Total Male"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="9">
            <b-btn class="newButton" @click="addProgramme">Add New Programme</b-btn>
          </b-col>
          <b-col md="3"></b-col>
        </b-row>
        <b-row>
          <b-col md="3"></b-col>
          <b-col md="4">
            <b-btn class="newButton" type="submit">Publish</b-btn>
            <!-- <b-btn class="newButton2" type="submit">Draft</b-btn> -->
          </b-col>
          <b-col md="5"></b-col>
        </b-row>
      </b-form>
    </div>
  </div>
</template>

<script>
import { getHeader, url } from '@/config.js';

export default {
  computed: {
    state() {
      return this.schoolInfo.name ? true : false;
    }
  },
  data() {
    return {
      schoolInfo: {
        name: "",
        category: null,
        email: "",
        about: "",
        address: "",
        phone: "",
        year_established: "",
        facebook: "",
        twitter: "",
        linkedin: "",
        instagram: "",
        ownership: null,
        state: "",
        location: "",
        website: "",
        programs: [
          {
            program_id: null,
            mode: null,
            type: null,
            female: "",
            male: ""
          }
        ]
      },
      opt: [
        { value: null, text: "Select a program" },
        { value: 3, text: "Computer Science" }
      ],
      options: [
        { value: null, text: "Choose Category" },
        { value: "Polytechnic", text: "Polytechnic" },
        { value: "College of Education", text: "College of Education" },
        { value: "College of Agriculture", text: "College of Agriculture" },
        { value: "Specialised institution", text: "Specialised institution" }
      ],
      mode: [
        { value: null, text: "Choose Mode" },
        { value: "Fulltime", text: "Fulltime" },
        { value: "Parttime", text: "Parttime" }
      ],
      type: [
        { value: null, text: "Choose Type" },
        { value: "ND1", text: "ND1" },
        { value: "ND2", text: "ND2" },
        { value: "HND1", text: "HND1" },
        { value: "HND2", text: "HND2" }
      ],
      options1: [
        { value: null, text: "Choose Ownership" },
        { value: "Federal Government Owned", text: "Federal Government Owned" },
        { value: "State Government Owned", text: "State Government Owned" },
        { value: "Private", text: "Private" }
      ],
      states: [
        "Abia",
        "Adamawa",
        "Anambra",
        "Akwa Ibom",
        "Bauchi",
        "Bayelsa",
        "Benue",
        "Borno",
        "Cross River",
        "Delta",
        "Ebonyi",
        "Enugu",
        "Edo",
        "Ekiti",
        "FCT",
        "Gombe",
        "Imo",
        "Jigawa",
        "Kaduna",
        "Kano",
        "Katsina",
        "Kebbi",
        "Kogi",
        "Kwara",
        "Lagos",
        "Nasarawa",
        "Niger",
        "Ogun",
        "Ondo",
        "Osun",
        "Oyo",
        "Plateau",
        "Rivers",
        "Sokoto",
        "Taraba",
        "Yobe",
        "Zamfara"
      ],
      errorName: "",
      errorAbout: "",
      errorAdd: "",
      errorState: "",
      errorLocation: "",
      errorCategory: "",
      errorOwnership: "",
      errorYoe: "",
      errorEmail: "",
      errorWeb: "",
      errorPhone: "",
      errorFb: "",
      errorTwitter: "",
      errorInsta: "",
      errorProgId: "",
      errorProgMode: "",
      errorProgType: "",
      errorProgF: "",
      errorProgM: ""
    };
  },
  watch: {
    "schoolInfo.name"(val) {
      if (val) {
        this.errorName = "";
      } else {
        this.errorName = "danger";
      }
    },
    "schoolInfo.about"(val) {
      if (val) {
        this.errorAbout = "";
      } else {
        this.errorAbout = "danger";
      }
    },
    "schoolInfo.email"(val) {
      if (val) {
        this.errorEmail = "";
      } else {
        this.errorEmail = "danger";
      }
    },
    "schoolInfo.location"(val) {
      if (val) {
        this.errorLocation = "";
      } else {
        this.errorLocation = "danger";
      }
    },
    "schoolInfo.address"(val) {
      if (val) {
        this.errorAdd = "";
      } else {
        this.errorAdd = "danger";
      }
    },
    "schoolInfo.state"(val) {
      if (val) {
        this.errorState = "";
      } else {
        this.errorState = "danger";
      }
    },
    "schoolInfo.category"(val) {
      if (val) {
        this.errorCategory = "";
      } else {
        this.errorCategory = "danger";
      }
    },
    "schoolInfo.ownership"(val) {
      if (val) {
        this.errorOwnership = "";
      } else {
        this.errorOwnership = "danger";
      }
    },
    "schoolInfo.year_established"(val) {
      if (val) {
        this.errorYoe = "";
      } else {
        this.errorYoe = "danger";
      }
    },
    "schoolInfo.website"(val) {
      if (val) {
        this.errorWeb = "";
      } else {
        this.errorWeb = "danger";
      }
    },
    "schoolInfo.phone"(val) {
      if (val) {
        this.errorPhone = "";
      } else {
        this.errorPhone = "danger";
      }
    },
    "schoolInfo.facebook"(val) {
      if (val) {
        this.errorFb = "";
      } else {
        this.errorFb = "danger";
      }
    },
    "schoolInfo.twitter"(val) {
      if (val) {
        this.errorTwitter = "";
      } else {
        this.errorTwitter = "danger";
      }
    },
    "schoolInfo.instagram"(val) {
      if (val) {
        this.errorInsta = "";
      } else {
        this.errorInsta = "danger";
      }
    }
  },
  methods: {
    getPrograms() {
      this.$http.get(url + `programs`, { headers: getHeader() }).then((response) => {
        let c = response.data.data;
        for (let i = 0; i < c.length; i++) {
          this.opt.push({
            value: c[i].id,
            text: c[i].name
          });
        }
      })
    },
    addInstitution() {
      if (
        this.schoolInfo.name &&
        this.schoolInfo.about &&
        this.schoolInfo.address &&
        this.schoolInfo.state &&
        this.schoolInfo.location &&
        this.schoolInfo.category &&
        this.schoolInfo.ownership &&
        this.schoolInfo.year_established &&
        this.schoolInfo.email &&
        this.schoolInfo.website &&
        this.schoolInfo.phone &&
        this.schoolInfo.facebook &&
        this.schoolInfo.twitter &&
        this.schoolInfo.instagram &&
        this.schoolInfo.programs[0].program_id &&
        this.schoolInfo.programs[0].mode &&
        this.schoolInfo.programs[0].type &&
        this.schoolInfo.programs[0].female &&
        this.schoolInfo.programs[0].male
      ) {
        this.$http.post(url + 'institutions', this.schoolInfo, { headers: getHeader() }).then((response) => {
          if (response.data.success) {
            this.$swal({
              type: 'success',
              title: 'Sucess',
              text: 'Institution added successfully',
              timer: 2000,
            });
            this.$router.push('/admin/institution');
          }
        })
      } else {
        if (!this.schoolInfo.name) {
          this.errorName = "danger";
        }
        if (!this.schoolInfo.email) {
          this.errorEmail = "danger";
        }
        if (!this.schoolInfo.about) {
          this.errorAbout = "danger";
        }
        if (!this.schoolInfo.address) {
          this.errorAdd = "danger";
        }
        if (!this.schoolInfo.state) {
          this.errorState = "danger";
        }
        if (!this.schoolInfo.location) {
          this.errorLocation = "danger";
        }
        if (!this.schoolInfo.category) {
          this.errorCategory = "danger";
        }
        if (!this.schoolInfo.ownership) {
          this.errorOwnership = "danger";
        }
        if (!this.schoolInfo.year_established) {
          this.errorYoe = "danger";
        }
        if (!this.schoolInfo.website) {
          this.errorWeb = "danger";
        }
        if (!this.schoolInfo.phone) {
          this.errorPhone = "danger";
        }
        if (!this.schoolInfo.facebook) {
          this.errorFb = "danger";
        }
        if (!this.schoolInfo.twitter) {
          this.errorTwitter = "danger";
        }
        if (!this.schoolInfo.instagram) {
          this.errorInsta = "danger";
        }
        if (!this.schoolInfo.programs[0].program_id) {
          this.errorProgId = "danger";
        }
        if (!this.schoolInfo.programs[0].mode) {
          this.errorProgMode = "danger";
        }
        if (!this.schoolInfo.programs[0].type) {
          this.errorProgType = "danger";
        }
        if (!this.schoolInfo.programs[0].female) {
          this.errorProgF = "danger";
        }
        if (!this.schoolInfo.programs[0].male) {
          this.errorProgM = "danger";
        }
        this.$swal({
          type: 'error',
          title: 'Error',
          text: 'Please fill all fields in red',
          timer: 1500,
        });
      }
    },
    addProgramme() {
      this.schoolInfo.programs.push({
        program_id: null,
        mode: null,
        type: null,
        female: "",
        male: ""
      });
    },
    removeProgramme(index) {
      this.schoolInfo.programs.splice(index, 1);
    }
  },
  created() {
    this.getPrograms();
  }
};
</script>
<style>
.danger {
  height: 60px !important;
  border: 2px solid red !important;
}
.mx-input {
  height: 60px !important;
  border: 2px solid #03913f !important;
}
.multiselect {
  font-family: inherit;
  font-size: 16px;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  /* height: 60px !important; */
  border: 2px solid #03913f !important;
}
</style>

<style scoped>
.addNewInstitution label {
  font-weight: 900;
  font-size: 16px;
}
</style>

<style scoped>
b:hover {
  cursor: pointer;
}
.addNewInstitution input,
select {
  height: 60px;
  margin-bottom: 40px;
  border: 2px solid #03913f;
}
.addNewInstitution textarea {
  border: 2px solid #03913f;
}
.addNewInstitution .seperator {
  margin: 2rem 0px 2rem 0px;
  color: #000000;
  font-weight: 900;
  font-size: 25px;
}
.form-group label {
  font-size: 200px !important;
}
#institution {
  width: 100%;
  background: white;
  padding: 20px;
}
.dropdown a {
  display: block;
  padding: 0.2em 0.8em;
  text-decoration: none;
  background: #ffffff;
  color: #333333;
}
th {
  white-space: nowrap;
}
.dropdown a:hover {
  background: #56f063;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown .dropdown-menu {
  position: absolute;
  top: 100%;
  display: none;
  margin: 0;
  list-style: none;
  width: 100%;
  padding: 0;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

/** Button Styles **/
.dropdown button {
  background: #ff6223;
  color: #ffffff;
  border: none;
  margin: 0;
  padding: 0.4em 0.8em;
  font-size: 1em;
}
.open-sans {
  font-family: "Open Sans", sans-serif;
  color: #262626;
}
tr:nth-child(even) {
  background: rgba(3, 145, 62, 0.144);
  border-left: 1px solid #03913f;
}
.montserrat {
  font-family: Montserrat, sans-serif;
  color: #333333;
}
.top-display {
  display: flex;
  margin-top: 20px;
}
.buttons {
  margin-left: 10px;
  margin-top: -5px;
  border-radius: 38px;
  background: #03913f;
}
.newButton {
  margin-left: 10px;
  width: calc((100% / 2) - 20px);
  height: 47px;
  margin: 10px;
  border-radius: 38px;
  background: #03913f;
  font-weight: 900;
}
.newButton2 {
  margin-left: 10px;
  width: calc((100% / 2) - 20px);
  height: 47px;
  margin: 10px;
  border-radius: 38px;
  background: #888888;
  font-weight: 900;
}
.table {
  background: white;
}
.buttons:hover,
.newButton:hover,
.newButton2:hover {
  background: #fff;
  color: #03913f;
}
.top-display-items {
  margin-left: 20px;
  font-size: 15px;
  padding: 0 20px 0 0;
  max-height: 22px;
}
.border-line {
  border-right: 2px solid #333333;
}
.green {
  color: #03913f;
}
</style>
