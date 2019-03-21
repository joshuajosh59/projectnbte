<template>
  <div id="programmes">
    <b-row>
      <div class="top-display">
        <b style="margin-left: 10px; font-size: 20px" class="montserrat">Programmes</b>
        <b-btn class="buttons" @click="gotoAddProgramme">
          <font-awesome-icon style="margin-right: 3px" :icon="['fas', 'plus']"/>Add Programme
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
              <th></th>
              <th>Name</th>
              <th>Code</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in programmes" :key="i.id" @dblclick="edit(i.id)">
              <td>
                <label class="form-checkbox">
                  <input type="checkbox" :value="i.id" v-model="selected">
                  <i class="form-icon"></i>
                </label>
              </td>
              <td>{{i.id}}</td>
              <td>{{i.name}}</td>
              <td>{{i.code}}</td>
              <td>{{i.category}}</td>
              <td>
                <!-- <font-awesome-icon class="menu" :icon="['fas', 'ellipsis-v']" size="1x"/> -->
                <div class="dropdown" style="margin-left: auto; margin-right: 20px">
                  <font-awesome-icon class="menu" :icon="['fas', 'ellipsis-v']" size="1x"/>
                  <ul
                    class="dropdown-menu"
                    style="position: absolute; top: -10px; margin-left: -150px"
                  >
                    <li>
                      <a style="cursor: pointer" @click="edit(i.id)">Edit</a>
                    </li>
                    <li>
                      <a style="cursor: pointer" @click="deleteI(i.id)">Trash</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <b-pagination
      style="margin-top:20px"
      size="md"
      :total-rows="totalPage"
      v-model="currentPage"
      :per-page="perPage"
      @change="handlePageChange"
    />
    <b-row>
      <b-col md="3">
        <b-form-select v-model="action" style="border-radius: 38px" :options="optn"/>
      </b-col>
      <b-col md="4">
        <b-btn class="applyBtn" @click="performBulkActions(action)">Apply</b-btn>
      </b-col>
      <b-col md="5"></b-col>
    </b-row>
  </div>
</template>

<script>
import { url, getHeader } from '@/config.js'

export default {
  data() {
    return {
      selected: [],
      total: '',
      selectAll: false,
      programmes: [],
      totalPage: 20,
      perPage: 10,
      currentPage: 1,
      optn: [{ value: null, text: 'Bulk Actions' },
      { value: "delete", text: 'Delete' },],
      action: null,
    }
  },
  methods: {
    select() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.programmes) {
          this.selected.push(this.programmes[i].id);
        }
      }
    },
    gotoAddProgramme() {
      this.$router.push('/addprogrammes');
    },
    performBulkActions(type) {
      if (type === 'delete') {
        for (let i = 0; i < this.selected.length; i++) {
          this.deleteProgrammes(this.selected[i]);
        }
        this.$swal({
          type: 'success',
          title: 'Sucess',
          text: 'Programmes deleted successfully',
          timer: 2000,
        });
      }
    },
    edit: function (id) {
      this.$router.push(`/editprogramme/${id}`);
    },
    deleteI: function (id) {
      this.$http.delete(url + 'programs/' + id, { headers: getHeader() }).then(() => {
        this.getProgramme();
      })
    },
    handlePageChange(next) {
      this.getProgramme(next);
    },
    getProgramme(next = 1) {
      this.$http.get(url + `programs?page=${next}&size=10`).then((response) => {
        this.programmes = response.data.data;
        this.totalPage = response.data.data.total;
        this.perPage = response.data.data.perPage;
        this.currentPage = response.data.data.page;
        // this.total = response.data.data.data.length;
      })
    }
  },
  created() {
    this.getProgramme()
  }
}
</script>
<style>
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
</style>

<style scoped>
.applyBtn {
  border-radius: 38px;
  background: #03913f;
}
#programmes {
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
