<template>
  <div class="container-fluid mt-0 pt-0">
    <div class="row">
      <div class="col-md-2 sidebar">
        <div class="text-center py-3">
          <img src="@/assets/logoL.png" alt="logo" class="img-fluid logo mb-3">
        </div>
        <nav class="nav flex-column">
          <a class="nav-link" href="#"><i class="bi bi-house"></i> Dashboard</a>
          <a class="nav-link" href="#"><i class="bi bi-person"></i> Merchant</a>
          <a class="nav-link" href="#"><i class="bi bi-grid"></i> Categories</a>
          <a class="nav-link" href="#"><i class="bi bi-handbag"></i> Services</a>
          <a class="nav-link" href="#"><i class="bi bi-calendar4-range"></i> Booking</a>
          <a class="nav-link" href="#"><i class="bi bi-star"></i> Reviews</a>
          <a class="nav-link" href="#"><i class="bi bi-chat-left-dots"></i> Contact</a>
          <a class="nav-link" href="#"><i class="bi bi-cash-coin"></i> Pricing</a>
          <a class="nav-link" href="#"><i class="bi bi-megaphone"></i> Ads</a>
          <a class="nav-link" href="#"><i class="bi bi-file-earmark"></i> Content</a>
          <div class="dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-clipboard-data"></i> Settlement
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
          <a class="nav-link" href="#"><i class="bi bi-card-checklist"></i> Reports</a>
          <div class="dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-shield-lock"></i> Permissions
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
          <a class="nav-link" href="#"><i class="bi bi-gear"></i> Settings</a>
        </nav>
      </div>
      <div class="col-md-10 main-content">
        <div>
          <h3 class="mb-0 text-start">Reports</h3>
          </div>
        <div class="d-flex justify-content-between align-items-center py-3">
          <div class="date-range-picker">
            <label for="from">Select Time</label>
            <div class="input-group">
              <DatePicker v-model="dateRange.from" :format="dateFormat" placeholder="From" />
              <span class="input-group-text"></span>
            </div>
            <div class="input-group">
              <DatePicker v-model="dateRange.to" :format="dateFormat" placeholder="To" />
              <span class="input-group-text"></span>
            </div>
          </div>
          <div>
            <button class="btn btn-warning me-2">Export to PDF File</button>
            <button class="btn btn-warning me-2 text-light" disabled>Export to Excel File</button>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="Checkedbox1" checked>
                  <label class="form-check-label fw-bold" for="Checkedbox1">Total Sales</label>
                </div>
                <p class="card-text fw-light">All Invoice With Many Details You Can See As Clients And Amounts And Every Things</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="Checkedbox2" checked>
                  <label class="form-check-label fw-bold" for="Checkedbox2">Total Administrative Fees</label>
                </div>
                <p class="card-text fw-light">All Invoice With Many Details You Can See As Clients And Amounts And Every Things</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="Checkedbox3" checked>
                  <label class="form-check-label fw-bold" for="Checkedbox3">Playgrounds</label>
                </div>
                <p class="card-text fw-light">All Invoice With Many Details You Can See As Clients And Amounts And Every Things</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="Checkedbox4" checked>
                  <label class="form-check-label fw-bold" for="Checkedbox4">Total Subscription Sales</label>
                </div>
                <p class="card-text fw-light">All Invoice With Many Details You Can See As Clients And Amounts And Every Things</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="Checkedbox5" checked>
                  <label class="form-check-label fw-bold" for="Checkedbox5">Clients</label>
                </div>
                <p class="card-text fw-light">All Invoice With Many Details You Can See As Clients And Amounts And Every Things</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="Checkedbox6" checked>
                  <label class="form-check-label fw-bold" for="Checkedbox6">Bank Fee</label>
                </div>
                <p class="card-text fw-light">All Invoice With Many Details You Can See As Clients And Amounts And Every Things</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
  name: 'ThirdPage',
  components: {
    DatePicker,
  },
  data() {
    return {
      dateRange: {
        from: null,
        to: null,
      },
      dateFormat: 'yyyy-MM-dd',
    };
  },
};
</script>

<style scoped>
body, html {
  height: 100%;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.container-fluid {
  height: 100vh;
  margin-top: 0;
}

.sidebar {
  background-color: #F8FBF8;
  padding-top: 20px;
  height: 790px;

}

.sidebar .nav-link {
  color: #6c757d;
  font-size: 16px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
}

.sidebar .nav-link i {
  margin-right: 10px;
}

.sidebar .nav-link:hover {
  background-color: #e9ecef;
  color: #000;
}

.main-content {
  padding: 20px;
}

.logo {
  width: 90px;
  height: auto;
}

.card {
  background-color: #FAFAFA;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(48, 48, 48, 0.1);
  height: 100%;
  text-align: start;
}

.date-range-picker {
  display: flex;
  align-items: center;
  gap: 10px;
}

.date-range-picker .input-group {
  display: flex;
  align-items: center;
  background: #f8f9fa;
  border-radius: 4px;
  padding: 5px;
}

.date-range-picker .input-group input {
  border: none;
  background: transparent;
  width: 100px;
  padding-left: 5px;
}

.date-range-picker .input-group input:focus {
  outline: none;
}

.date-range-picker .input-group-text {
  background: transparent;
  border: none;
}

.btn-warning {
  background-color: #ffc107;
  border: none;
  color: #ffffff;
}

.btn-outline-secondary {
  border: 1px solid #6c757d;
  color: #e7eaec;
}

.btn-outline-secondary:hover {
  background-color: #6c757d;
  color: #fff;
}
</style>
