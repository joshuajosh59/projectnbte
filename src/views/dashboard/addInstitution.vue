<template>
  <div id="institution">
    <b-row>
      <div class="top-display">
        <b style="margin-left: 10px; font-size: 20px" class="montserrat">Add Institution</b>
        <!-- <b-btn class="buttons" v-b-modal.modal1>
          <font-awesome-icon style="margin-right: 3px" :icon="['fas', 'user-plus']"/>Add Institution
        </b-btn>-->
      </div>
    </b-row>
    <br>
    <b-row>
      <b-col md="6">
        <!-- <div class="top-display" style="margin-top: 10px">
          <div class="top-display-items">
            <p>All(11)</p>
          </div>
          <div class="top-display-items border-line green">
            <p>Mine (8)</p>
          </div>
          <div class="top-display-items border-line green">
            <p>Published (10)</p>
          </div>
          <div class="top-display-items green">
            <p>Draft</p>
          </div>
          <br>
          <br>
        </div>-->
      </b-col>
      <b-col md="6">
        <div style="display: flex">
          <div style="flex-grow: 1; width: 350px; margin-left: 40px">
            <input placeholder="Search" class="form-control mx-auto" type="text">
          </div>
          <div style="flex-grow: 1; width: 350px; margin-top: 10px">
            <b-btn class="buttons" style="padding: 8px 40px">Search</b-btn>
          </div>
        </div>
      </b-col>
    </b-row>
    <div style="margin-top: 20px; color: #333333; font-size: 15px; font-family: montserrat">
      <b-form class="addNewInstitution" @submit.prevent="addInstitution">
        <b-form-group label="Institution name" label-for="name">
          <b-form-input
            id="name"
            v-model="schoolInfo.name"
            type="text"
            required
            placeholder="Kaduna Polytechnic"
          />
        </b-form-group>

        <b-form-group id="exampleInputGroup2" label="About Institution" label-for="textarea">
          <b-form-textarea
            id="textarea"
            v-model="schoolInfo.about"
            placeholder="Enter a brief description..."
            rows="8"
          />
        </b-form-group>
        <b-row>
          <b-col md="6">
            <b-form-group label="Address" label-for="address">
              <b-form-input
                id="address"
                v-model="schoolInfo.address"
                type="text"
                required
                placeholder="Enter Address.."
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group label="State" label-for="address">
              <b-form-select v-model="schoolInfo.location" :options="states"/>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="4">
            <b-form-group label="Category" label-for="cat" label-align="center">
              <b-form-select v-model="schoolInfo.category" :options="options"/>
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group label="Ownership" label-for="ownership" label-align="center">
              <b-form-select v-model="schoolInfo.ownership" :options="options1"/>
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group label="Year of Establishment" label-for="address">
              <!-- <b-form-input
                id="address"
                type="text"
                v-model="schoolInfo.year_established"
                required
                placeholder="Enter Address.."
              />-->
              <date-picker
                v-model="schoolInfo.year_established"
                type="year"
                lang="en"
                placeholder="Select Year"
                heigth="100"
              ></date-picker>
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
                type="text"
                v-model="schoolInfo.email"
                required
                placeholder="Enter email..."
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group label="Website" label-for="website" label-align="center">
              <b-form-input
                id="website"
                type="text"
                v-model="schoolInfo.website"
                required
                placeholder="Enter website..."
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group label="Phone Number" label-for="phone" label-align="center">
              <b-form-input
                id="phone"
                type="text"
                v-model="schoolInfo.phone"
                required
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
                required
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
                required
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
                required
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
        <b-row v-for="programme in schoolInfo.programmes" :key="programme.name">
          <b-col md="4">
            <b-form-group label="Name" label-for="pName" label-align="center">
              <b-form-input
                id="pName"
                v-model="programme.name"
                type="text"
                required
                placeholder="Enter Programme name"
              />
            </b-form-group>
          </b-col>
          <b-col md="2">
            <b-form-group label="Mode" label-for="mode" label-align="center">
              <b-form-select v-model="programme.mode" :options="mode"/>
            </b-form-group>
          </b-col>
          <b-col md="2">
            <b-form-group label="Type" label-for="type" label-align="center">
              <b-form-select v-model="programme.type" :options="type"/>
            </b-form-group>
          </b-col>
          <b-col md="2">
            <b-form-group label="Female" label-for="fm" label-align="center">
              <b-form-input
                id="fm"
                type="number"
                v-model="programme.female"
                required
                placeholder="Total Female"
              />
            </b-form-group>
          </b-col>
          <b-col md="2">
            <b-form-group label="Male" label-for="ml" label-align="center">
              <b-form-input
                id="ml"
                type="text"
                v-model="programme.male"
                required
                placeholder="Total Male"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="5">
            <b-btn class="newButton" @click="addProgramme">Add New Programme</b-btn>
          </b-col>
          <b-col md="4"></b-col>
          <b-col md="5"></b-col>
        </b-row>
        <b-row>
          <b-col md="3"></b-col>
          <b-col md="4">
            <b-btn class="newButton" type="submit">Publish</b-btn>
            <b-btn class="newButton2" type="submit">Draft</b-btn>
          </b-col>
          <b-col md="5"></b-col>
        </b-row>
      </b-form>
    </div>
  </div>
</template>

<script>
import { getHeader, url } from '@/config.js';
import DatePicker from 'vue2-datepicker';

export default {
  components: { DatePicker },
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
        location: "",
        website: "",
        programmes: [
          {
            name: "",
            mode: null,
            type: null,
            female: "",
            male: "",
          }
        ],
      },
      options: [
        { value: null, text: 'Choose Category' },
        { value: "Polytechnic", text: 'Polytechnic' },
        { value: "College of Education", text: 'College of Education' },
        { value: "College of Agriculture", text: 'College of Agriculture' },
        { value: "College of Health", text: 'College of Health' },
      ],
      mode: [{ value: null, text: 'Choose Mode' }, { value: 'Fulltime', text: 'Fulltime' }, { value: 'Parttime', text: 'Parttime' }],
      type: [{ value: null, text: 'Choose Type' }, { value: 'ND1', text: 'ND1' }, { value: 'ND2', text: 'ND2' }, { value: 'HND1', text: 'HND1' }, { value: 'HND2', text: 'HND2' }],
      options1: [
        { value: null, text: 'Choose Ownership' },
        { value: "Federal Government Owned", text: 'Federal Government Owned' },
        { value: "State Government Owned", text: 'State Government Owned' },
        { value: "Private", text: 'Private' },
      ],
      states: ["Abia", "Adamawa", "Anambra", "Akwa Ibom", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Enugu", "Edo", "Ekiti", "FCT", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"],
    }
  },
  methods: {
    addInstitution() {
      this.$http.post(url + 'institutions', this.schoolInfo, { headers: getHeader() }).then((response) => {
        if (response.data.success) {
          this.$swal({
            type: 'success',
            title: 'Sucess',
            text: 'Institution added successfully',
            timer: 2000,
          });
          // this.$forceUpdate();
          this.$router.push('/institution');
        }
      })
    },
    addProgramme() {
      this.schoolInfo.programmes.push({
        name: "",
        mode: null,
        type: null,
        female: "",
        male: "",
      });
    }
  },
}

</script>
<style>
.mx-input {
  height: 60px;
  border: 2px solid #03913f;
}
</style>

<style scoped>
.addNewInstitution label {
  font-weight: 900;
  font-size: 16px;
}
</style>

<style scoped>
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
