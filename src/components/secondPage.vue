<template>
  <div class="all container-fluid">
    <div class="d-flex align-items-start">
      <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <div class="text-center">
          <img src="@/assets/Gicon.png" alt="logo" class="img">
        </div>  
        <div class="mt-4">
          <button class="nav-link btn" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="false">
                 <i class="bi bi-easel-fill me-2"></i>{{ $t('home') }}
          </button><br>
          <button class="nav-link btn" id="v-pills-menu-tab" data-bs-toggle="pill" data-bs-target="#v-pills-menu" type="button" role="tab" aria-controls="v-pills-menu" aria-selected="false">
            <i class="bi bi-receipt-cutoff me-2"></i>{{ $t('menu') }}
          </button><br>
          <button class="nav-link btn" id="v-pills-service-tab" data-bs-toggle="pill" data-bs-target="#v-pills-service" type="button" role="tab" aria-controls="v-pills-service" aria-selected="false">
            <i class="bi bi-easel-fill me-2"></i>{{ $t('servicesLink') }}
          </button><br>
          <button class="nav-link btn" id="v-pills-video-tab" data-bs-toggle="pill" data-bs-target="#v-pills-video" type="button" role="tab" aria-controls="v-pills-video" aria-selected="false">
            <i class="bi bi-gear-wide-connected me-2"></i>{{ $t('videos') }}
          </button><br>
          <button class="nav-link btn" id="v-pills-affiliate-tab" data-bs-toggle="pill" data-bs-target="#v-pills-affiliate" type="button" role="tab" aria-controls="v-pills-affiliate" aria-selected="false">
            <i class="bi bi-patch-check me-2"></i>{{ $t('affiliate') }}
          </button><br>
          <button class="nav-link btn" id="v-pills-contact-tab" data-bs-toggle="pill" data-bs-target="#v-pills-contact" type="button" role="tab" aria-controls="v-pills-contact" aria-selected="false">
            <i class="bi bi-chat-left-text-fill me-2"></i>{{ $t('contactUs') }} <span class="badge rounded-pill bg-danger ms-2">10+</span>
          </button><br>
          <button class="nav-link btn" id="v-pills-permission-tab" data-bs-toggle="pill" data-bs-target="#v-pills-permission" type="button" role="tab" aria-controls="v-pills-permission" aria-selected="false">
            <i class="bi bi-shield-lock-fill me-2"></i>{{ $t('permissions') }}
          </button><br>
        </div>
        <div class="mt-4">
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="lang" v-model="isArabic" @change="toggleLanguage">
            <label class="form-check-label text-light" for="lang">{{ switchLabel }}</label>
          </div>
          <div class="form-check form-switch mt-2">
            <input class="form-check-input" type="checkbox" role="switch" id="mode" checked>
            <label class="form-check-label text-light" for="mode">{{ $t('nightMode') }}</label>
          </div>
        </div>
        <div class="mt-4 text-center">
          <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#download">{{ $t('downloadApps') }}</button>
        </div>
      </div>
            <div class="tab-content" id="v-pills-tabContent">
        <div class="tab-pane fade" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">...</div>
        <div class="tab-pane fade" id="v-pills-menu" role="tabpanel" aria-labelledby="v-pills-menu-tab" tabindex="0">...</div>
        <div class="tab-pane fade" id="v-pills-service" role="tabpanel" aria-labelledby="v-pills-service-tab" tabindex="0">...</div>
        <div class="tab-pane fade" id="v-pills-video" role="tabpanel" aria-labelledby="v-pills-video-tab" tabindex="0">...</div>
        <div class="tab-pane fade" id="v-pills-affiliate" role="tabpanel" aria-labelledby="v-pills-affiliate-tab" tabindex="0">...</div>
        <div class="tab-pane fade" id="v-pills-contact" role="tabpanel" aria-labelledby="v-pills-contact-tab" tabindex="0">...</div>
        <div class="tab-pane fade" id="v-pills-permission" role="tabpanel" aria-labelledby="v-pills-permission-tab" tabindex="0">...</div>
      </div>
    </div>

    <div class="modal fade" id="download" tabindex="-1" aria-labelledby="downloadLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header border-0">
            <h1 class="modal-title fs-5 text-light" id="downloadLabel">Add New Testimonial</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body border-0">
            <form>
              <div class="mb-3">
                <label for="photo" class="form-label text-light">User Photo</label>
                <div class="upload-box">
                  <div>
                  <input type="file" id="photo" class="form-control-file">
                   <i class="bi bi-image text-light"></i>
                   </div>
                  <p class="fs-6 text-light">Drop Your Image Here Or Browse</p>
                  <small class="d-block mt-2 text-light">Max Size 5 MB, 35*35 Pixel Supported Format Jpg, Png</small>
                </div>
              </div>
              <div class="mb-3">
                <label for="name" class="form-label text-light">User Name</label>
                <input type="text" id="name" class="form-control">
              </div>
              <div class="mb-3">
                <label for="company" class="form-label text-light">Company Name</label>
                <input type="text" id="company" class="form-control">
              </div>
              <div class="mb-3">
                <label for="content" class="form-label text-light">Content</label>
                <textarea class="form-control" id="content" rows="6"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer border-0">
            <button type="button" class="btn btn-warning">Save</button>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-10 main">
       <div class="d-flex justify-content-start align-items-center py-3">
          <h3 class="mb-3">{{ $t('notificationSetting') }}</h3>
          
            <button class="me-6"><i class="bi bi-bell-fill"></i><span class=" bg-danger border border-light rounded-circle ">
          </span> </button> 
          
        </div>
          <div class="row row-cols-2 row-cols-md-2 g-2">
          <div class="col">
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" id="switch1" v-model="isViewable" @change="handleSwitchChange">
          <label class="form-check-label text-light" for="switch1">{{ $t('systemNotification') }}</label>
          <p class="fs-6 fw-light text-light">{{ $t('systemNotificationDesc') }}</p>
          <div v-if="!isViewable">
            <router-link to="/third"></router-link>
          </div>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="switch2" checked>
            <label class="form-check-label text-light" for="switch2">{{ $t('billingCreated') }}</label>
            <p class="fs-6 fw-light text-light">{{ $t('billingCreatedDesc') }}</p><br>
          </div>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="switch3" checked>
            <label class="form-check-label text-light" for="switch3">{{ $t('backupMaker') }}</label>
            <p class="fs-6 fw-light text-light">{{ $t('backupMakerDesc') }}</p><br>
          </div>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="switch4" checked>
            <label class="form-check-label text-light" for="switch4">{{ $t('gotFreeMonth') }}</label>
            <p class="fs-6 fw-light text-light">{{ $t('gotFreeMonthDesc') }}</p><br>
          </div>
        </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SecondPage',
  data() {
    return {
      isViewable: true,
      isArabic: false,
    };
  },
  computed: {
    switchLabel() {
      return this.isArabic ? 'English' : 'العربية';
    },
  },
  methods: {
    handleSwitchChange() {
      if (!this.isViewable) {
        this.$router.push({ name: 'thirdPage' });
      }
    },
    toggleLanguage() {
      this.$i18n.locale = this.isArabic ? 'ar' : 'en';
    },
  },
  watch: {
    isArabic() {
      this.toggleLanguage();
    },
  },
};
</script>

<style scoped>
body, html {
  height: 100%;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.all {
  display: flex;
  align-items: start;
  justify-content: start;
  height: 100vh;
  background-color: #383636;
  font-size: 14px;
}

.nav-pills {
  height: 790px;
  width: 350px; 
  border: 0px, 2px, 2px, 2px;
  border-color: black;
  z-index: 1; 
  top: 0; 
  background-color: rgb(66, 66, 66); 
  padding-top: 20px;
  font-size: 20px;
}

.nav-pills .nav-link {
  color: rgb(168, 165, 165);
  font-size: 18px;
  text-align: left;
  padding-left: 20px;
}

.nav-pills .nav-link i {
  margin-right: 0px;
}

.nav-pills .nav-link:hover {
  background-color: rgb(225, 209, 65);
  color: rgb(71, 69, 69);
}

.nav-pills .a {
  display: flex;
  justify-content: start;
  text-decoration: none;
}

.img {
  width: 100px;
  height: auto;
}

.main {
  background-color: #383636;
  color: #fff;
  flex-grow: 1;
  padding: 10px;
  text-align: start;
  font-size: 16px;
}

.modal-content {
  background-color: #333;
  font-size: 14px;
  text-align: start;
}

.modal-content .modal-header {
  text-shadow: 2px 2px 4px #000000;
}

.modal-content .form-control {
  background-color: rgb(96, 96, 96);
  border: none;
}

.form-check-input:checked {
  background-color: #6C5ECF;
  border-color: #6C5ECF;
}

.upload-box {
  border: 1px dashed rgb(96, 96, 96);
  padding: 20px;
  text-align: center;
  position: relative;
}
</style>
