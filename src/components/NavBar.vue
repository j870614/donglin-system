<template>
  <nav class="navbar navbar-light bg-white fixed-top">
    <div class="container-fluid">
    <div class="d-flex align-items-center">
      <button
        class="navbar-toggler my-0 d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link to="/"
        class="navbar-brand d-flex align-items-center mx-2"
      >
        <img
          src="/img/1.Logo1.png"
          alt=""
          width="49"
          height="80"
          class="d-none d-lg-inline-block align-text-top me-3"
        />
        <img
          src="/img/3.tittle.png"
          alt=""
          width="228"
          height="39"
          class="d-none d-lg-inline-block align-text-top"
        />
        <h1 class="h2 fw-bolder d-none d-lg-inline-block align-text-top ms-5">
          寺務管理系統
        </h1>
      </router-link>
    </div>

    <div class="d-flex align-items-center">
      <a href="#" class="link-dark">
        <span
          class="material-icons-outlined border rounded-circle p-2 mx-2 mx-lg-3"
        >
          notifications
        </span>
      </a>

      <div class="dropdown me-lg-3">
        <a
          class="
            btn
            dropdown-toggle
            d-flex
            px-0
            align-items-center
            material-icons-outlined
          "
          href="#"
          role="button"
          id="accountMemu"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span
            class="
              material-icons-outlined
              border
              rounded-circle
              p-2
              text-primary
              me-lg-3
            "
            >account_circle</span
          >
          <span class="h5 m-0 fw-bolder d-none d-lg-inline-block"
            >系統管理員</span
          >
        </a>

        <ul class="dropdown-menu dropdown-menu-end nav-accounts">
          <li>
            <a class="dropdown-item d-flex align-items-center" href="#">
              <span class="material-icons-outlined me-1">manage_accounts</span>
              <span class="fs-5">帳號設定</span>
            </a>
          </li>
          <li>
            <a
              class="dropdown-item d-flex align-items-center"
              href="#"
              data-js="logoutBtn"
            >
              <span class="material-icons-outlined me-1" data-js="logoutBtn"
                >logout</span
              >
              <span class="fs-5" data-js="logoutBtn">登出</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </nav>
</template>

<script>

</script>
