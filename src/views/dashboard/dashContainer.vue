<template>
  <div id="all">
    <div class="top-nav">
      <div class="inner-brand">
        <div>
          <b-row>
            <font-awesome-icon @click="toggleNav" class="menu" :icon="['fas', 'bars']" size="2x"/>
            <!-- <b class="montserrat brand">NBTE</b> -->
            <img class="brand" src="./../../assets/logoW.png" style="width: 250px; height: 36px;">
          </b-row>
        </div>
        <div style="flex-grow: 1; width: 350px; margin-left: 40px">
          <!-- <input placeholder="Search" ref="xxx" class="form-control xxx mx-auto" type="text"> -->
        </div>
        <div>
          <!-- <font-awesome-icon
            ref="bell"
            @click="search"
            class="bell"
            :icon="['fas', 'search']"
            size="1x"
          />-->
        </div>
        <div style="padding: 0 20px">
          <font-awesome-icon @click="logout" class="notification" :icon="['fa', 'sign-out-alt']"/>
        </div>
        <div style="padding: 0 10px">
          <img
            src="./../../assets/Library-2-700x338.jpg"
            style="border-radius: 100%; margin-top: 5px"
            width="30"
            height="30"
          >
        </div>
        <div style="margin-right: 30px">
          <p class="open-sans mt-2 name" style="color: white">{{this.name}}</p>
        </div>
      </div>
    </div>
    <div style="display: flex; flex-direction: row">
      <div class="side-nav" v-show="display">
        <br>
        <br>
        <br>
        <ul class="side-links montserrat">
          <li class="list-link">
            <font-awesome-icon
              style="color: white; padding-top: 10px; padding-right: 15px;"
              :icon="['fas', 'th']"
              size="2x"
            />
            <span class="span">Overview</span>
          </li>
          <router-link
            class="institution"
            @click="makeActive('institution')"
            to="/admin/institution"
          >
            <li class="list-link">
              <font-awesome-icon
                style="color: white; padding-top: 10px; padding-right: 15px;"
                :icon="['fas', 'university']"
                size="2x"
              />
              <span class="span">Institution</span>
            </li>
          </router-link>
          <router-link class="criteria" @click="makeActive('criteria')" to="/admin/criteria">
            <li class="list-link">
              <font-awesome-icon
                style="color: white; padding-top: 10px; padding-right: 15px;"
                :icon="['fas', 'list-alt']"
                size="2x"
              />
              <span class="span">Criteria</span>
            </li>
          </router-link>
          <router-link class="criteria" @click="makeActive('criteria')" to="/admin/webometrics">
            <li class="list-link">
              <font-awesome-icon
                style="color: white; padding-top: 10px; padding-right: 15px;"
                :icon="['fa', 'globe']"
                size="2x"
              />
              <span class="span">Webometrics</span>
            </li>
          </router-link>
          <router-link class="news" @click="makeActive('programmes')" to="/admin/programmes">
            <li class="list-link">
              <font-awesome-icon
                style="color: white; padding-top: 10px; padding-right: 15px;"
                :icon="['fa', 'book-open']"
                size="2x"
              />
              <span class="span">Programme</span>
            </li>
          </router-link>
          <router-link class="news" @click="makeActive('rank')" to="/admin/rank">
            <li class="list-link">
              <font-awesome-icon
                style="color: white; padding-top: 10px; padding-right: 15px;"
                :icon="['fa', 'star']"
                size="2x"
              />
              <span class="span">Rank</span>
            </li>
          </router-link>
          <router-link class="news" @click="makeActive('news')" to="/admin/news">
            <li class="list-link">
              <font-awesome-icon
                style="color: white; padding-top: 10px; padding-right: 15px;"
                :icon="['far', 'newspaper']"
                size="2x"
              />
              <span class="span">News</span>
            </li>
          </router-link>
          <router-link class="users" @click="makeActive('users')" to="/admin/users">
            <li class="list-link">
              <font-awesome-icon
                style="color: white; padding-top: 10px; padding-right: 15px;"
                :icon="['fas', 'user-alt']"
                size="2x"
              />
              <span class="span">Users</span>
            </li>
          </router-link>
          <router-link class="users" @click="makeActive('users')" to="/admin/staff">
            <li class="list-link">
              <font-awesome-icon
                style="color: white; padding-top: 10px; padding-right: 15px;"
                :icon="['fas', 'user-tie']"
                size="2x"
              />
              <span class="span">Staff</span>
            </li>
          </router-link>
          <!-- <li class="list-link">
            <font-awesome-icon
              style="color: white; padding-top: 10px; padding-right: 15px;"
              :icon="['fas', 'th-large']"
              size="2x"
            />
            <span class="span">Menu</span>
          </li>
          <li class="list-link">
            <font-awesome-icon
              style="color: white; padding-top: 10px; padding-right: 15px;"
              :icon="['fas', 'cog']"
              size="2x"
            />
            <span class="span">Settings</span>
          </li>-->
          <hr style="border: 0.4px solid #EFEFEF">
          <li class="list-link">
            <font-awesome-icon
              style="color: white; padding-top: 10px; padding-right: 15px;"
              :icon="['fas', 'book-reader']"
              size="2x"
            />
            <span class="span">Documentation</span>
          </li>
        </ul>
      </div>
      <div class="main">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import { url, getHeader } from '@/config.js';

export default {
  data() {
    return {
      display: true,
      active: 'institution',
      name: '',
    }
  },
  methods: {
    toggleNav: function () {
      this.display = !this.display
    },
    search: function () {
      this.$refs.xxx.style.display = "block";
    },
    logout: function () {
      this.$swal.fire({
        title: 'Logout!',
        text: "Are you sure you want to Logout?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Log me out!'
      }).then((result) => {
        if (result.value) {
          localStorage.clear();
          return window.location.replace(`${window.location.origin}/admin`);
        }
      })
    },
    getMe: function () {
      this.$http.get(url + `me`, { headers: getHeader() }).then((response) => {
        this.name = response.data.user.name;
      })
    }
  },
  created() {
    this.getMe()
  }
}
</script>

<style scoped>
#all {
  overflow-y: hidden;
  height: 100%;
}
.notification {
  color: white;
  margin: 12px;
  cursor: pointer;
}
.top-nav {
  background: #03913f;
  height: 60px;
  width: 100%;
  z-index: 4;
  position: fixed;
}
.open-sans {
  /* font-family: 'Open Sans', sans-serif; */
  color: #262626;
}
.montserrat {
  font-family: "Montserrat", sans-serif;
  color: #59626a;
}
.inner-brand {
  padding: 7px 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.form-control {
  border-radius: 40px !important;
  max-width: 350px;
  margin-top: 2px !important;
}
.side-nav {
  height: 100vh;
  background: #03913f;
  min-width: 230px;
  max-width: 230px;
  display: block;
  position: fixed;
  z-index: 3;
  padding-right: 10px;
}
.side-links {
  list-style: none;
  padding-left: 20px;
}
.list-link {
  padding: 8px 0;
}
.institution,
.criteria,
.news,
.users {
  color: #03913f;
  background: white;
}
.span {
  color: rgb(255, 255, 255) !important;
  font-size: 14px;
}
.menu {
  display: none;
  color: white;
  margin: 5px 0;
  cursor: pointer;
}
.main {
  margin: 60px 0 0 230px;
  /* padding:20px; */
}
.brand {
  color: white;
  font-size: 26px;
}
.bell {
  color: white;
  margin-top: 13px;
  display: none;
  cursor: pointer;
  margin-left: 10px;
}

@media (max-width: 920px) {
  .name {
    display: none;
  }
  .main {
    margin: 60px 0 0 0;
    width: 100%;
  }
  .menu {
    display: block;
  }
  .brand {
    font-size: 26px;
    display: none;
  }
  .bell {
    color: white;
    margin-top: 13px;
    display: block;
  }
  .xxx {
    display: none;
  }
}

@media (max-width: 605px) {
  .menu {
    display: block !important;
  }
  .brand {
    display: none;
    font-size: 26px;
  }
}
</style>
