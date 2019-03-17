<template>
  <div id="news">
    <b-row>
      <div class="top-display">
        <b style="margin-left: 10px; font-size: 20px" class="montserrat">News</b>
        <b-btn class="buttons" @click="openForm">
          <font-awesome-icon style="margin-right: 3px" :icon="['fa', 'book-open']"/>Add News
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
          <div class="top-display-items border-line green">
            <p>Mine ({{this.published}})</p>
          </div>
          <div class="top-display-items border-line green">
            <p>Published ({{this.published}})</p>
          </div>
          <div class="top-display-items green">
            <p>Draft ({{this.draft}})</p>
          </div>
          <br>
          <br>
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
              <th></th>
              <th>Title</th>
              <th>Status</th>
              <th>Last Updated</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(n,i) in news" :key="n.id">
              <td>
                <label class="form-checkbox">
                  <input type="checkbox" :value="n.id" v-model="selected">
                  <i class="form-icon"></i>
                </label>
              </td>
              <td>{{i+1}}</td>
              <td>{{n.title}}</td>
              <td>{{n.status}}</td>
              <td>{{n.updated_at}}</td>
              <td>{{n.content}}</td>
            </tr>
          </tbody>
        </table>
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
  </div>
</template>

<script>
import { url, getHeader } from '@/config.js'

export default {
  data() {
    return {
      news: [],
      totalPage: '',
      perPage: 10,
      currentPage: 1,
      published: '',
      draft: '',
      total: '',
      optn: [{ value: null, text: 'Bulk Actions' },
      { value: "delete", text: 'Delete' },],
      selected: [],
      selectAll: false,
      action: null,
    }
  },
  methods: {
    select() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.news) {
          this.selected.push(this.news[i].id);
        }
      }
    },
    performBulkActions(type) {
      if (type === 'delete') {
        for (let i = 0; i < this.selected.length; i++) {
          this.deleteNews(this.selected[i]);
        }
        this.$swal({
          type: 'success',
          title: 'Sucess',
          text: 'News deleted successfully',
          timer: 2000,
        });
      }
    },
    deleteNews(id) {
      this.$http.delete(url + `posts/${id}`, { headers: getHeader() }).then(() => {
        this.getInstitutions();
      })
    },
    openForm() {
      this.$router.push('/addnews');
    },
    handlePageChange(next) {
      this.getNews(next);
    },
    getNews(next) {
      this.$http.get(url + `posts?page=${next},size=10`).then((response) => {
        this.news = response.data.data.data;
        this.totalPage = response.data.data.total;
        this.perPage = response.data.data.perPage;
        this.currentPage = response.data.data.page;
        this.total = response.data.data.data.length;
        this.published = response.data.data.data.filter(item => item.status === 'published').length;
        this.draft = response.data.data.data.filter(item => item.status === 'draft').length;
      })
    }
  },
  created() {
    this.getNews();
  }
}
</script>

<style scoped>
.applyBtn {
  border-radius: 38px;
  background: #03913f;
}
#news {
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
