<template>
  <footer id="footer">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-7">
          <div class="row">
            <div class="col-md-4 mb-md-0 mb-4">
              <h2 class="footer-heading">About</h2>
              <ul class="list-unstyled">
                <li><a href="#" class="d-block">Out story</a></li>
                <li><a href="#" class="d-block">Awards</a></li>
                <li><a href="#" class="d-block">Our Team</a></li>
                <li><a href="#" class="d-block">Career</a></li>
              </ul>
            </div>
            <div class="col-md-4 mb-md-0 mb-4">
              <h2 class="footer-heading">Company</h2>
              <ul class="list-unstyled">
                <li><a href="#" class="d-block">Our Service</a></li>
                <li><a href="#" class="d-block">Client</a></li>
                <li><a href="#" class="d-block">Contact</a></li>
                <li><a href="#" class="d-block">Press</a></li>
              </ul>
            </div>
            <div class="col-md-4 mb-md-0 mb-4">
              <h2 class="footer-heading">Resource</h2>
              <ul class="list-unstyled">
                <li><a href="#" class="d-block">Blog</a></li>
                <li><a href="#" class="d-block">Newsletter</a></li>
                <li><a href="#" class="d-block">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-5 mb-md-0 mb-4">
          <h2 class="footer-heading">Subscribe</h2>
          <form action="#" class="subscribe-form">
            <div class="form-group d-flex">
              <input
                type="text"
                class="form-control rounded-left"
                placeholder="Enter email address"
              />
              <button type="submit" class="form-control submit rounded-right">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <div class="row mt-5 pt-4 border-top">
        <div class="col-md-6 col-lg-8 mb-md-0 mb-4">
          <p class="coppyright mb-0">
            Copyright ©2024 All rights reserved. | This template is made with
            <i class="ion-ios-heart text-danger"></i> by
            <a to="https://github.com/NguyenVanAnh97/eCommerce_iChar" target="_blank" class="text-danger font-weight-bold">VA</a>
          </p>
        </div>
        <div class="col-md-6 col-lg-2 text-md-right">
          <ul class="ftco-footer-social p-0">
            <li class="ftco-animate">
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="Twitter"
                ><i class="bi bi-twitter"></i>
              </a>
            </li>
            <li class="ftco-animate">
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="Facebook"
                ><i class="bi bi-meta"></i
              ></a>
            </li>
            <li class="ftco-animate">
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="Instagram"
                ><i class="bi bi-instagram"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer-heading {
  font-size: 18px;
  color: #fff;
  margin-bottom: 30px;
}

.list-unstyled li a {
  color: rgba(255, 255, 255, 0.2);
}

.subscribe-form .form-group input {
  background: white !important;
  border: none !important;
  outline: none !important;
  color: rgba(0, 0, 0, 0.3) !important;
  font-size: 16px;
  border-radius: 0;
}
.form-control {
    height: 52px;
    background: #fff;
    color: #000;
    font-size: 18px;
    border-radius: 0px;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: 1px solid rgba(0, 0, 0, 0.1);
}

.subscribe-form .form-group .submit {
  color: #fff !important;
  display: block;
  width: 130px;
  height: 52px;
  font-size: 16px;
  background: var(--primary);
  border: none;
  border-radius: 0;
}

.subscribe-form .form-group input {
    background: white !important;
    border: none !important;
    outline: none !important;
    color: rgba(0, 0, 0, 0.3) !important;
    font-size: 16px;
    border-radius: 0;
}

.rounded-left {
    border-top-left-radius: 0.25rem !important;
    border-bottom-left-radius: 0.25rem !important;
}

.rounded-right {
    border-top-right-radius: 0.25rem !important;
    border-bottom-right-radius: 0.25rem !important;
}

.coppyright {
    color: rgba(255, 255, 255, 0.3);
}

.ftco-footer-social li {
    list-style: none;
    margin: 0 10px 0 0;
    display: inline-block;
}


.ftco-footer-social li a {
    height: 40px;
    width: 40px;
    display: block;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    position: relative;
}

.ftco-footer-social li a i {
    position: absolute;
    font-size: 15px;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.ftco-footer-social li a {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
}
.text-md-right {
        text-align: right !important;
    }

    .border-top {
        border-top: 1px solid rgba(255, 255, 255, 0.05) !important;
    }
</style>
