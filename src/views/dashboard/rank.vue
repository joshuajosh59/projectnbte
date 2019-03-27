<template>
  <div id="institution">
    <b-row>
      <div class="top-display">
        <b style="margin-left: 10px; font-size: 20px" class="montserrat">Grading</b>
      </div>
    </b-row>
    <br>
    <b-row>
      <b-col md="6">
        <div class="top-display" style="margin-top: 10px">
          <div class="top-display-items">
            <p>All({{this.total}})</p>
          </div>
          <div class="top-display-items border-line green">
            <p>Graded ({{this.ranked}})</p>
          </div>
          <div class="top-display-items green">
            <p>Ungraded ({{this.unranked}})</p>
          </div>
          <br>
          <br>
        </div>
      </b-col>
      <b-col md="2"></b-col>
      <b-col md="4">
        <b-btn @click="rankAll()" class="buttonb">Rank</b-btn>
      </b-col>
    </b-row>
    <div style="margin-top: 20px; color: #333333; font-size: 15px; font-family: montserrat">
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
              <th>Score</th>
              <th>Name</th>
              <th>Status</th>
              <th>Last Updated</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in institutions" :key="i.id">
              <template>
                <td>
                  <label class="form-checkbox">
                    <input type="checkbox" :value="i.id" v-model="selected">
                    <i class="form-icon"></i>
                  </label>
                </td>
                <td>{{i.rank}}</td>
                <td>{{i.name}}</td>
                <td v-if="i.rank > 0">Graded</td>
                <td v-else>Ungraded</td>
                <td v-if="i.updated_at !== null">{{formatDate(i.updated_at)}}</td>
                <td v-else>----</td>
                <td>{{i.about}}</td>
                <td>
                  <b-btn @click="rankIns(i.id)" class="buttons">Grade</b-btn>
                </td>
              </template>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <b-pagination
      style="margin-top:20px"
      size="md"
      :total-rows="lastPage"
      v-model="currentPage"
      :per-page="perPage"
      @change="handlePageChange"
    />
  </div>
</template>

<script>
import { url, getHeader } from '@/config.js';


export default {
  data() {
    return {
      editId: '',
      currentPage: null,
      lastPage: null,
      perPage: null,
      selected: [],
      selectAll: false,
      institutions: [],
      total: "",
      ranked: "",
      unranked: "",
    }
  },
  methods: {
    select() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.items) {
          this.selected.push(this.items[i].id);
        }
      }
    },
    openForm() {
      this.$router.push('/addnew');
    },
    formatDate(date) {
      let dd = new Date(date);
      return dd.toLocaleDateString('en-EN');
    },
    rankIns(id) {
      this.$router.push(`/rankinstitution/${id}`);
    },
    handlePageChange(next) {
      this.getInstitutions(next);
    },
    rankAll() {
      this.$swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Rank it!'
      }).then((result) => {
        if (result.value) {
          this.$http.put(url + `rank`, {}, { headers: getHeader() }).then((response) => {
            this.$swal.fire(
              'Graded!',
              'Successfully.',
              'success'
            );
            return response;
          })
        }
      })
    },
    getInstitutions: function (next) {
      this.$http.get(url + `institutions?page=${next},size=10`).then((response) => {
        this.lastPage = response.data.data.total
        this.institutions = response.data.data.data.reverse();
        this.perPage = response.data.data.perPage
        this.currentPage = response.data.data.page
        this.total = response.data.data.total
        this.ranked = response.data.data.data.filter(i => i.rank > 0).length
        this.unranked = response.data.data.data.filter(i => i.rank <= 0).length
      })
    }
  },
  created: function () {
    this.getInstitutions();
    (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1) ? this.$parent.display = false : true;
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
.buttonb {
  margin-left: 10px;
  margin-top: -5px;
  width: 50%;
  border-radius: 38px;
  background: #03913f;
  float: right;
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
@media (max-width: 1240px) {
  th:nth-child(5),
  td:nth-child(5),
  th:nth-child(6),
  td:nth-child(6) {
    display: none;
  }
}
</style>
