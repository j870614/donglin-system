<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="amitabha"></div>
      </div>

      <div class="col-6 mb-3 bg-white">
        <div class="row justify-content-center">
          <div
            class="logo d-flex align-items-center justify-content-center m-5"
          >
            <img
              src="/img/1.Logo1.png"
              alt=""
              width="31.41"
              height="51.28"
              class="d-none d-lg-inline-block align-text-top me-3"
            />
            <img
              src="/img/3.tittle.png"
              alt=""
              width="146.15"
              height="25"
              class="d-none d-lg-inline-block align-text-top"
            />
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-6">
            <form class="row g-3">
              <div class="col-12">
                <small class="m-0 p-0 text-primary fs-5">寺務管理系統</small>
                <h1 class="m-0 fw-bolder">歡迎使用</h1>
              </div>
              <div class="col-12 mt-5">
                <button
                  type="button"
                  class="w-100 btn btn-outline-neutral-40
                  d-flex align-items-center justify-content-center py-2"
                >
                  <img
                    src="/img/logos/LINE_logo.svg"
                    alt=""
                    class="mx-2"
                    height="20"
                  />
                  <span>使用 LINE 帳號登入</span>
                </button>
              </div>

              <div class="col-12">
                <button
                  type="button"
                  class="w-100 btn btn-outline-neutral-40
                  d-flex align-items-center justify-content-center py-2"
                >
                  <img
                    src="/img/logos/Google__G__Logo.svg"
                    alt=""
                    class="mx-2"
                    height="20"
                  />
                  <span>使用 Google 帳號登入</span>
                </button>
              </div>

              <div class="col-12">
                <button
                  type="button"
                  class="w-100 btn btn-outline-neutral-40
                  d-flex align-items-center justify-content-center py-2"
                >
                  <img
                    src="/img/logos/icons8-facebook.svg"
                    alt=""
                    class="mx-2"
                    height="25"
                  />
                  <span>使用 Facebook 帳號登入</span>
                </button>
              </div>
              <div class="col-12">
                <div class="position-relative my-3">
                  <div class="progress bg-neutral-40" style="height: 2px">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div
                    class="position-absolute top-0 start-50
                    translate-middle bg-white text-center text-neutral-80
                    px-2 fw-bold"
                  >
                    或是使用電子信箱登入
                  </div>
                </div>
              </div>
              <div class="col-12">
                <label for="email" class="form-label fw-bolder">電子信箱</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="請輸入電子信箱"
                />
              </div>
              <div class="col-12">
                <label for="password" class="form-label fw-bolder">密碼</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="請輸入密碼"
                />
              </div>

              <div class="col-12 d-flex justify-content-between">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label" for="gridCheck">
                    記住帳號
                  </label>
                </div>
                <a href="#">忘記密碼？</a>
              </div>

              <div class="col-12 mt-5">
                <button
                  type="button"
                  class="w-100 btn btn-primary"
                  id="loginBtn"
                >
                  登入
                </button>
              </div>

              <div class="col-12">
                <p>
                  還沒有帳戶嗎？
                  <a href="./register/sign-up.html">前往註冊</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
