<template>
  <div id="criteria">
    <b-row>
      <div class="top-display">
        <b style="margin-left: 10px; font-size: 20px" class="montserrat">Ranking Criteria</b>
        <b-btn class="buttons" @click="gotoAddCriteria">Add Criteria</b-btn>
      </div>
    </b-row>
    <br>
    <b-row>
      <b-col md="6">
        <div class="top-display" style="margin-top: 10px">
          <div class="top-display-items">
            <p>All(11)</p>
          </div>
          <div class="top-display-items border-line green">
            <p>Published (10)</p>
          </div>
          <div class="top-display-items green">
            <p>Draft</p>
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
              <th>Name</th>
              <th>Weight</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in criteria" :key="i.id">
              <td>
                <label class="form-checkbox">
                  <input type="checkbox" :value="i.id" v-model="selected">
                  <i class="form-icon"></i>
                </label>
              </td>
              <td>{{i.id}}</td>
              <td>{{i.name}}</td>
              <td>{{i.weight}}</td>
              <td>{{i.updated_at}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- <b-row>
        <b-col md="2">
          <b-form-select v-model="action" style="border-radius: 38px" :options="options"/>
        </b-col>
        <b-col md="4">
          <b-btn class="applyBtn">Apply</b-btn>
        </b-col>
        <b-col md="4"></b-col>
      </b-row>-->
    </div>
    <b-modal
      id="modal1"
      ok-only
      ok-variant="success"
      centered
      ok-title="Add"
      @ok="addCriteria"
      title="Add Criteria"
    >
      <b-row>
        <b-col md="6">
          <b-form-group label="Name" label-for="name" label-align="center">
            <b-form-input
              id="name"
              type="text"
              v-model="name"
              required
              placeholder="Enter Criteria Name"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group label="Weigth" label-for="weigth" label-align="center">
            <b-form-input
              id="weigth"
              type="number"
              v-model="weigth"
              required
              placeholder="Enter Criteria Weigth"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-modal>
    <b-pagination
      style="margin-top:20px"
      size="md"
      :total-rows="totalPage"
      v-model="currentPage"
      :per-page="perPage"
      @change="handlePageChange"
    />
  </div>
</template>

<script>
import { url, getHeader } from '@/config.js'

export default {
  data() {
    return {
      selected: [],
      selectAll: false,
      criteria: [],
      name: '',
      weigth: '',
      totalPage: 20,
      perPage: 10,
      currentPage: 1,
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
    gotoAddCriteria() {
      this.$router.push('/addcriteria');
    },
    addCriteria() {
      const { name, weigth } = this;
      this.$http.post(url + 'criteria', { name, 'weight': weigth }, { headers: getHeader() }).then((response) => {
        if (response.data.success) {
          this.$swal({
            type: 'success',
            title: 'Sucess',
            text: 'Criteria added successfully',
            timer: 2000,
          });
        }
      })
    },
    handlePageChange(next) {
      this.getCriteria(next);
    },
    getCriteria(next = 1) {
      this.$http.get(url + `criteria?page=${next}&size=10`).then((response) => {
        this.criteria = response.data.data.data;
        this.totalPage = response.data.data.total;
        this.perPage = response.data.data.perPage;
        this.currentPage = response.data.data.page;
      })
    }
  },
  created() {
    this.getCriteria()
  }
}
</script>

<style scoped>
.applyBtn {
  border-radius: 38px;
  background: #03913f;
}
#criteria {
  width: 100%;
  background: #f6f5fd;
  padding: 20px;
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
