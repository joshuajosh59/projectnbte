<template>
  <div id="institution">
    <b-row>
      <div class="top-display">
        <b style="margin-left: 10px; font-size: 20px" class="montserrat">Institution</b>
        <b-btn class="buttons" @click="this.openForm">
          <font-awesome-icon style="margin-right: 3px" :icon="['fas', 'user-plus']"/>Add Institution
        </b-btn>
      </div>
    </b-row>
    <br>
    <b-row>
      <b-col md="6">
        <div class="top-display" style="margin-top: 10px">
          <div class="top-display-items">
            <p>All({{this.total}})</p>
          </div>
          <br>
          <br>
        </div>
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
      <!-- <b-table responsive striped hover :fields="fields" :items="items">
                <template slot="control" slot-scope="data">
                    <b-form-checkbox id="checkbox1" v-model="status" value="accepted" unchecked-value="not_accepted">
                        119
                    </b-form-checkbox>
                </template>
      </b-table>-->
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>
                <label class="form-checkbox">
                  <input type="checkbox" v-model="selectAll" @click="select">
                  <i class="form-icon"></i>
                </label>
              </th>
              <th>Number</th>
              <th>Institution</th>
              <th>Status</th>
              <th>Last Updated</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in institutions" :key="i.id">
              <!-- <template v-if="editId == i.id">
                            <td>
                                <label class="form-checkbox">
                                    <input type="checkbox" :value="i.id" v-model="selected">
                                    <i class="form-icon"></i>
                                </label>
                            </td>
                            <td>{{i.rank}}</td>
                            <td><input v-model="editSchool.name" type="text"></td>
                            <td><input v-model="editSchool.location" type="text"></td>
                            <td><input v-model="editSchool.year_established" type="text"></td>
                            <td><input v-model="editSchool.about" type="text"></td>
                            <td>
                                <b-row>
                                    <span class="icon" style="margin-right: 20px">
                                        <font-awesome-icon style="cursor: pointer" @click="editInstitution(i.id)" class="menu" :icon="['fas', 'check']" size="1x"/>
                                    </span>
                                    <span class="icon">
                                        <font-awesome-icon style="cursor: pointer" class="menu" :icon="['fas', 'ban']" size="1x"/>
                                    </span>
                                </b-row>
                            </td>
              </template>-->
              <template>
                <td>
                  <label class="form-checkbox">
                    <input type="checkbox" :value="i.id" v-model="selected">
                    <i class="form-icon"></i>
                  </label>
                </td>
                <td>{{i.rank}}</td>
                <td>{{i.name}}</td>
                <td>{{i.location}}</td>
                <td>{{i.year_established}}</td>
                <td>{{i.about}}</td>
                <td>
                  <!-- <font-awesome-icon class="menu" :icon="['fas', 'ellipsis-v']" size="1x"/> -->
                  <div class="dropdown" style="margin-left: auto; margin-right: 20px">
                    <font-awesome-icon class="menu" :icon="['fas', 'ellipsis-v']" size="1x"/>
                    <ul
                      class="dropdown-menu"
                      style="position: absolute; top: -10px; margin-left: -150px"
                    >
                      <li>
                        <a style="cursor: pointer" @click="edit(i)">Edit Institution</a>
                      </li>
                      <li>
                        <a
                          style="cursor: pointer"
                          @click="deleteInstitution(i.id)"
                        >Trash Institution</a>
                      </li>
                    </ul>
                  </div>
                </td>
              </template>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <b-modal
      @ok="editInstitution(editId)"
      ok-title="Edit"
      ref="modal2"
      centered
      title="Edit Institution"
    >
      <b-row>
        <b-col md="6">
          <b-form-input v-model="editSchool.name" type="text" placeholder="Institution Name"/>
          <b-form-input v-model="editSchool.address" type="text" placeholder="Address"/>
          <b-form-input v-model="editSchool.phone" type="text" placeholder="Phone Number"/>
          <b-form-input v-model="editSchool.facebook" type="text" placeholder="Facebook URL"/>
          <b-form-input v-model="editSchool.linkedin" type="text" placeholder="LinkedIn URL"/>
          <b-form-select
            style="border-radius: 38px"
            v-model="editSchool.ownership"
            :options="options1"
            class="mt-1"
          />
          <b-form-input v-model="editSchool.location" type="text" placeholder="Location"/>
        </b-col>
        <b-col md="6">
          <b-form-select
            style="border-radius: 38px"
            v-model="editSchool.category"
            :options="options"
            class
          />
          <b-form-input
            v-model="editSchool.year_established"
            type="text"
            placeholder="Year Established"
          />
          <b-form-input v-model="editSchool.email" type="email" placeholder="Institution Email"/>
          <b-form-input v-model="editSchool.twitter" type="text" placeholder="Twitter URL"/>
          <b-form-input v-model="editSchool.instagram" type="text" placeholder="Instagram URL"/>
          <b-form-input v-model="editSchool.website" type="text" placeholder="Website URL"/>
        </b-col>
      </b-row>
      <div>
        <b-form-textarea
          style="padding-top: 18px"
          v-model="editSchool.about"
          placeholder="About School"
          rows="3"
          max-rows="6"
        />
      </div>
    </b-modal>
    <b-modal @ok="addInstitution" ok-title="Add" id="modal1" centered title="Add Institution">
      <b-row>
        <b-col md="6">
          <b-form-input v-model="schoolInfo.name" type="text" placeholder="Institution Name"/>
          <b-form-input v-model="schoolInfo.address" type="text" placeholder="Address"/>
          <b-form-input v-model="schoolInfo.phone" type="text" placeholder="Phone Number"/>
          <b-form-input v-model="schoolInfo.facebook" type="text" placeholder="Facebook URL"/>
          <b-form-input v-model="schoolInfo.linkedin" type="text" placeholder="LinkedIn URL"/>
          <b-form-select
            style="border-radius: 38px"
            v-model="schoolInfo.ownership"
            :options="options1"
            class="mt-1"
          />
          <b-form-input v-model="schoolInfo.location" type="text" placeholder="Location"/>
        </b-col>
        <b-col md="6">
          <b-form-select
            style="border-radius: 38px"
            v-model="schoolInfo.category"
            :options="options"
            class
          />
          <b-form-input
            v-model="schoolInfo.year_established"
            type="text"
            placeholder="Year Established"
          />
          <b-form-input v-model="schoolInfo.email" type="email" placeholder="Institution Email"/>
          <b-form-input v-model="schoolInfo.twitter" type="text" placeholder="Twitter URL"/>
          <b-form-input v-model="schoolInfo.instagram" type="text" placeholder="Instagram URL"/>
          <b-form-input v-model="schoolInfo.website" type="text" placeholder="Website URL"/>
        </b-col>
      </b-row>
      <div>
        <b-form-textarea
          style="padding-top: 18px"
          v-model="schoolInfo.about"
          placeholder="About School"
          rows="3"
          max-rows="6"
        />
      </div>
    </b-modal>
    <b-row>
      <b-col md="3">
        <b-form-select v-model="action" style="border-radius: 38px" :options="optn"/>
      </b-col>
      <b-col md="4">
        <b-btn class="applyBtn" @click="performBulkActions(action)">Apply</b-btn>
      </b-col>
      <b-col md="5"></b-col>
    </b-row>
    <b-pagination
      style="margin-top:20px"
      size="md"
      :total-rows="lastPage"
      v-model="currentPage"
      :per-page="perPage"
    />
  </div>
</template>

<script>
import { getHeader, url } from '@/config.js'

export default {
  data() {
    return {
      editId: '',
      currentPage: null,
      lastPage: null,
      perPage: null,
      action: null,
      selected: [],
      selectAll: false,
      editSchool: {
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
        website: ""
      },
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
        action: null,
      },
      optn: [{ value: null, text: 'Bulk Actions' },
      { value: "delete", text: 'Delete' },],
      options: [
        { value: null, text: 'Choose Category' },
        { value: "Polytechnic", text: 'Polytechnic' },
        { value: "College of Education", text: 'College of Education' },
        { value: "College of Agriculture", text: 'College of Agriculture' },
        { value: "College of Health", text: 'College of Health' },
      ],
      options1: [
        { value: null, text: 'Choose Ownership' },
        { value: "Federal Government Owned", text: 'Federal Government Owned' },
        { value: "State Government Owned", text: 'State Government Owned' },
        { value: "Private", text: 'Private' },
      ],
      states: ["Abia", "Adamawa", "Anambra", "Akwa Ibom", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Enugu", "Edo", "Ekiti", "FCT", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"],
      institutions: [],
      total: "",
    }
  },
  methods: {
    performBulkActions(type) {
      if (type === 'delete') {
        for (let i = 0; i < this.selected.length; i++) {
          this.deleteInstitution(this.selected[i]);
        }
        this.$swal({
          type: 'success',
          title: 'Sucess',
          text: 'Institutions deleted successfully',
          timer: 2000,
        });
      }
    },
    select() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.institutions) {
          this.selected.push(this.institutions[i].id);
        }
      }
    },
    openForm() {
      this.$router.push('/addnew');
    },
    addInstitution() {
      this.$http.post(url + 'institutions', this.schoolInfo, { headers: getHeader() }).then((response) => {
        this.getInstitutions();
        return response;
      })
    },
    deleteInstitution: function (id) {
      this.$http.delete(url + 'institutions/' + id, { headers: getHeader() }).then(() => {
        this.getInstitutions();
      })
    },
    edit: function (institution) {
      this.$refs.modal2.show()
      this.editId = institution.id
      this.editSchool.name = institution.name
      this.editSchool.category = institution.category
      this.editSchool.email = institution.email
      this.editSchool.address = institution.address
      this.editSchool.phone = institution.phone
      this.editSchool.facebook = institution.facebook
      this.editSchool.twitter = institution.twitter
      this.editSchool.instagram = institution.instagram
      this.editSchool.linkedin = institution.linkedin
      this.editSchool.website = institution.website
      this.editSchool.ownership = institution.ownership
      this.editSchool.location = institution.location
      this.editSchool.year_established = institution.year_established
      this.editSchool.about = institution.about
    },
    editInstitution: function (id) {
      this.$http.put(url + 'institutions/' + id, this.editSchool, { headers: getHeader() }).then((response) => {
        this.getInstitutions();
        return response;
      })
    },
    getInstitutions: function () {
      this.$http.get(url + 'institutions?page=1,size=10').then((response) => {
        this.lastPage = response.data.data.lastPage
        this.institutions = response.data.data.data
        this.perPage = response.data.data.perPage
        this.currentPage = response.data.data.page
        this.total = response.data.data.total
      })
    }
  },
  created: function () {
    this.getInstitutions();
  }
}

</script>


<style scoped>
.applyBtn {
  border-radius: 38px;
  background: #03913f;
}
#institution {
  width: 100%;
  background: #f6f5fd;
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
.table {
  background: white;
}
.buttons:hover {
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
.form-control {
  border-radius: 38px !important;
  /* max-width: 350px;  */
}
</style>
