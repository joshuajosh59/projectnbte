<template>
  <div id="institution">
    <b-row>
      <div class="top-display">
        <b style="margin-left: 10px; font-size: 20px" class="montserrat">Rank Institution</b>
      </div>
    </b-row>
    <br>
    <b-row>
      <b-col md="6"></b-col>
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
      <b-form class="addNewInstitution" @submit.prevent="rankInstitution">
        <b-row>
          <b-col md="6">
            <b-form-group
              label="(1). Percentage of programmes with full accreditation"
              label-for="popwfa"
            >
              <b-form-input id="popwfa" v-model="popwfa" type="number" :min="1" :max="5" required/>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="(2). Total number of programmes with full accreditation."
              label-for="tnopwfa"
            >
              <b-form-input
                id="tnopwfa"
                v-model="tnopwfa"
                type="number"
                :min="1"
                :max="5"
                required
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <b-form-group label="(3). Compliance with carrying capacity." label-for="cwcc">
              <b-form-input id="cwcc" v-model="cwcc" type="number" :min="1" :max="5" required/>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="(4). Compliance with 70:30 ratio of technological to non-technological enrollment"
              label-for="cwrottne"
            >
              <b-form-input
                id="cwrottne"
                v-model="cwrottne"
                type="number"
                :min="1"
                :max="5"
                required
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <b-form-group
              label="(5). Proportion of academic staff showing mix at departmental level - chief lecturer academic staff by level and department. Planning and Research."
              label-for="poaswm"
            >
              <b-form-input id="poaswm" v-model="poaswm" type="number" :min="1" :max="5" required/>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="(6). Collaboration with local or foreign institutions"
              label-for="cwlofi"
            >
              <b-form-input id="cwlofi" v-model="cwlofi" type="number" :min="1" :max="5" required/>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <b-form-group
              label="(7). Proportion of IGR to approved total budget"
              label-for="poitatb"
            >
              <b-form-input
                id="poitatb"
                v-model="poitatb"
                type="number"
                :min="1"
                :max="5"
                required
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="(8). Market-driven research (in terms of patent and innovation). Student/lecturer, patent pending or finalized patent. Documents provided. Evidence of commercialization. innovation in development"
              label-for="mdr"
            >
              <b-form-input id="mdr" v-model="mdr" type="number" :min="1" :max="5" required/>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <b-form-group
              label="(9). Capacity building of staff (both overseas and local)"
              label-for="cbos"
            >
              <b-form-input id="cbos" v-model="cbos" type="number" :min="1" :max="5" required/>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group label="(10). Student completion rate" label-for="scr">
              <b-form-input id="scr" v-model="scr" type="number" :min="1" :max="5" required/>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <b-form-group
              label="(11). Ability of institution to introduce program in new and emerging fields"
              label-for="aoitip"
            >
              <b-form-input id="aoitip" v-model="aoitip" type="number" :min="1" :max="5" required/>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="(12). Stability of acadamic calendar, industrial harmony, labour disputes"
              label-for="soacihld"
            >
              <b-form-input
                id="soacihld"
                v-model="soacihld"
                type="number"
                :min="1"
                :max="5"
                required
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <b-form-group label="(13). Student to PC ratio" label-for="stpr">
              <b-form-input id="stpr" v-model="stpr" type="number" :min="1" :max="5" required/>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="(14). Teaching quality (including staff/student ratio)"
              label-for="tqis"
            >
              <b-form-input id="tqis" v-model="tqis" type="number" :min="1" :max="5" required/>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <b-form-group
              label="(15). Teaching quality ( full time to part time staff ratio)"
              label-for="tqft"
            >
              <b-form-input id="tqft" v-model="tqft" type="number" :min="1" :max="5" required/>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="(16). Library resources (library holdings per full-time student)"
              label-for="lclh"
            >
              <b-form-input id="lclh" v-model="lclh" type="number" :min="1" :max="5" required/>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <b-form-group
              label="(17). Incorporation of entrepreneurship education into the insitution's curriculum. Measured by presence of Entrepreneurship Development Centres (at the moment)"
              label-for="ioeeiti"
            >
              <b-form-input
                id="ioeeiti"
                v-model="ioeeiti"
                type="number"
                :min="1"
                :max="5"
                required
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="(18). Availability of current campus master plan, strategic plan, academic brief"
              label-for="aoccmp"
            >
              <b-form-input id="aoccmp" v-model="aoccmp" type="number" :min="1" :max="5" required/>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <b-form-group
              label="(19). Availability of internal quality assurance mechanisms and coordinating units"
              label-for="aoiqamacu"
            >
              <b-form-input
                id="aoiqamacu"
                v-model="aoiqamacu"
                type="number"
                :min="1"
                :max="5"
                required
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="(20). Evidence of corporate social responsibility in local community"
              label-for="eocsrilc"
            >
              <b-form-input
                id="eocsrilc"
                v-model="eocsrilc"
                type="number"
                :min="1"
                :max="5"
                required
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <b-form-group
              label="(21). Percentage of academic staff with membership of relevant profesional qualifications Department"
              label-for="poaswmorpqd"
            >
              <b-form-input id="poaswm" v-model="poaswm" type="number" :min="1" :max="5" required/>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="(22). Availability of functional website and adequate internet bandwidth"
              label-for="aofwaaib"
            >
              <b-form-input
                id="aofwaaib"
                v-model="aofwaaib"
                type="number"
                :min="1"
                :max="5"
                required
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <b-form-group label="(23). Relationship with host community" label-for="rwhc">
              <b-form-input id="rwhc" v-model="rwhc" type="number" :min="1" :max="5" required/>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="(24). Efficiency in the administration of SIWES"
              label-for="eitaos"
            >
              <b-form-input id="eitaos" v-model="eitaos" type="number" :min="1" :max="5" required/>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12">
            <b-form-group label="(25). Conduct/Frequency of Council meetings" label-for="cocm">
              <b-form-input id="cocm" v-model="cocm" type="number" :min="1" :max="5" required/>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3"></b-col>
          <b-col md="4">
            <b-btn class="newButton" type="submit">Submit</b-btn>
          </b-col>
          <b-col md="5"></b-col>
        </b-row>
      </b-form>
    </div>
  </div>
</template>

<script>
// import { getHeader, url } from '@/config.js';

export default {
  data() {
    return {
      popwfa: '',
      tnopwfa: '',
      cwcc: '',
      cwrottne: '',
      poaswm: '',
      cwlofi: '',
      poitatb: '',
      mdr: '',
      cbos: '',
      scr: '',
      aoitip: '',
      soacihld: '',
      stpr: '',
      tqis: '',
      tqft: '',
      lclh: '',
      ioeeiti: '',
      aoccmp: '',
      aoiqamacu: '',
      eocsrilc: '',
      poaswmorpqd: '',
      aofwaaib: '',
      rwhc: '',
      eitaos: '',
      cocm: '',
      id: this.$route.params.Id,
      criterias: [],
    }
  },
  methods: {
    rankInstitution() {
      const {
        popwfa,
        tnopwfa,
        cwcc,
        cwrottne,
        poaswm,
        cwlofi,
        poitatb,
        mdr,
        cbos,
        scr,
        aoitip,
        soacihld,
        stpr,
        tqis,
        tqft,
        lclh,
        ioeeiti,
        aoccmp,
        aoiqamacu,
        eocsrilc,
        poaswmorpqd,
        aofwaaib,
        rwhc,
        eitaos,
        cocm,
      } = this;
      let sum = Number(popwfa) + Number(tnopwfa) + Number(cwcc) + Number(cwrottne) + Number(poaswm) + Number(cwlofi) + Number(poitatb) + Number(mdr) + Number(cbos) + Number(scr) + Number(aoitip) + Number(soacihld) + Number(stpr) + Number(tqis) + Number(tqft) + Number(lclh) + Number(ioeeiti) + Number(aoccmp) + Number(aoiqamacu) + Number(eocsrilc) + Number(poaswmorpqd) + Number(aofwaaib) + Number(rwhc) + Number(eitaos) + Number(cocm);
      this.$swal({
        type: 'success',
        title: 'Sucess',
        text: `Institution with id ${this.id} was ranked with total score of ${sum}`,
        timer: 5000,
      });
      return this.$router.push('/rank');
      // this.$http.post(url + 'institutions', this.schoolInfo, { headers: getHeader() }).then((response) => {
      //   if (response.data.success) {
      //     this.$swal({
      //       type: 'success',
      //       title: 'Sucess',
      //       text: 'Institution added successfully',
      //       timer: 2000,
      //     });
      //     this.$router.push('/rank');
      //   }
      // })
    },
  },
}

</script>

<style scoped>
.addNewInstitution input,
select {
  height: 60px;
  margin-bottom: 40px;
}
.addNewInstitution .seperator {
  margin: 2rem 0px 2rem 0px;
  color: #000000;
  font-weight: 900;
  font-size: 25px;
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
