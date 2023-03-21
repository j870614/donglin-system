<template>
  <div class="collapse show collapse-horizontal" id="sidebar" ref="sidebar">
    <aside
      class="
        sidebar
        vh-100
        d-flex
        bg-white
        flex-column
        overflow-auto
        collapse
        sticky-top
      "
    >
      <!-- 首頁 -->
      <router-link to="/" class="sidebar-link" active-class="none">
        <div class="d-flex align-items-center fs-5">
          <span class="material-icons-outlined me-2">home</span>
          首頁
        </div>
      </router-link>

      <div class="aside-body"></div>
      <!-- 系統管理 -->
      <a
        data-bs-toggle="collapse"
        class="sidebar-link"
        href="#menu-system"
        role="button"
      >
        <div class="d-flex justify-content-between fs-5">
          <p class="mb-0 d-flex align-items-center">
            <span class="material-icons-outlined me-2">build</span>
            系統管理
          </p>
          <span class="material-icons-outlined"> keyboard_arrow_down </span>
        </div>
      </a>
      <!-- 系統管理子選單 -->
      <div class="collapse show ps-3" id="menu-system">
        <!-- 使用者權限 -->
        <a
          data-bs-toggle="collapse"
          class="sidebar-link d-flex justify-content-between fs-5"
          href="#menu-authority"
          role="button"
        >
          <div class="d-flex justify-content-between fs-5">
            <span class="material-icons-outlined me-2 d-flex align-items-center"
              >vpn_key</span
            >
            使用者權限
          </div>
          <span class="material-icons-outlined"> keyboard_arrow_down </span>
        </a>

        <!-- 使用者權限選單 -->
        <div class="collapse ps-4" id="menu-authority">
          <router-link
            to="/admin/auth-mgmt"
            class="
              sidebar-link
              border-start border-neutral-40 border-4
              rounded-0 rounded-end
              fs-5
              ms-5
              d-flex
            "
          >
            權限管理
          </router-link>
          <router-link
            to="/admin/auth-issuance"
            class="
              sidebar-link
              border-start border-neutral-40 border-4
              rounded-0 rounded-end
              fs-5
              ms-5
              d-flex
            "
          >
            權限核發
          </router-link>
        </div>

        <!-- 系統設定 -->
        <a
          data-bs-toggle="collapse"
          class="sidebar-link d-flex justify-content-between fs-5"
          href="#menu-system-setting"
          role="button"
        >
          <div class="mb-0 d-flex align-items-center">
            <span class="material-icons-outlined me-2">settings</span>
            系統設定
          </div>
          <span class="material-icons-outlined"> keyboard_arrow_down </span>
        </a>
        <!-- 系統設定選單 -->
        <div class="collapse ps-4" id="menu-system-setting">
          <router-link
            to="/admin/buddhas7-stg-num-setting"
            class="
              sidebar-link
              border-start border-neutral-40 border-4
              rounded-0 rounded-end
              fs-5
              ms-5
              d-flex
            "
          >
            佛七期數設定
          </router-link>
          <router-link
            to="/admin/calendar"
            class="
              sidebar-link
              border-start border-neutral-40 border-4
              rounded-0 rounded-end
              fs-5
              ms-5
              d-flex
            "
          >
            行事曆
          </router-link>
        </div>

        <!-- 系統公告 -->
        <a
          data-bs-toggle="collapse"
          class="sidebar-link d-flex justify-content-between fs-5"
          href="#menu-system-post"
          role="button"
        >
          <div class="mb-0 d-flex align-items-center">
            <span class="material-icons-outlined me-2">notifications</span>
            系統公告
          </div>
          <span class="material-icons-outlined"> keyboard_arrow_down </span>
        </a>

        <!-- 系統公告選單 -->
        <div class="collapse ps-4" id="menu-system-post">
          <router-link
            to="/admin/new-announcement"
            class="
              sidebar-link
              border-start border-neutral-40 border-4
              rounded-0 rounded-end
              fs-5
              ms-5
              d-flex
            "
          >
            新增公告
          </router-link>
          <router-link
            to="/admin/hist-announc-inq"
            class="
              sidebar-link
              border-start border-neutral-40 border-4
              rounded-0 rounded-end
              fs-5
              ms-5
              d-flex
            "
          >
            歷史公告查詢
          </router-link>
        </div>
      </div>

      <!-- 知客 -->
      <a
        data-bs-toggle="collapse"
        class="sidebar-link"
        href="#menu-service"
        role="button"
      >
        <div class="d-flex justify-content-between fs-5">
          <p class="mb-0 d-flex align-items-center">
            <span class="material-icons-outlined me-2">group</span>
            知客
          </p>
          <span class="material-icons-outlined"> keyboard_arrow_down </span>
        </div>
      </a>

      <!-- 知客子選單 -->
      <div class="collapse ps-3" id="menu-service">
        <!-- 佛七報名預約 -->
        <div class="sidebar-link">
          <a
            data-bs-toggle="collapse"
            class="link-dark"
            href="#menu-buddha7"
            role="button"
          >
            <div class="d-flex justify-content-between fs-5">
              <p class="mb-0 d-flex align-items-center">
                <span class="material-icons-outlined me-2">note_alt</span>
                佛七報名預約
              </p>
              <span class="material-icons-outlined"> keyboard_arrow_down </span>
            </div>
          </a>
        </div>

        <!-- 佛七報名預約選單  連結頁面待製作，完成後請將 active-class="none" 移除-->
        <div class="collapse ps-4" id="menu-buddha7">
          <router-link
            to="#"
            class="
              sidebar-link
              border-start border-neutral-40 border-4
              rounded-0 rounded-end
              fs-5
              ms-5
              d-flex
            "
            active-class="none"
          >
            報名預約名單
          </router-link>
          <router-link
            to="#"
            class="
              sidebar-link
              border-start border-neutral-40 border-4
              rounded-0 rounded-end
              fs-5
              ms-5
              d-flex
            "
            active-class="none"
          >
            報名佛七
          </router-link>
          <router-link
            to="#"
            class="
              sidebar-link
              border-start border-neutral-40 border-4
              rounded-0 rounded-end
              fs-5
              ms-5
              d-flex
            "
            active-class="none"
          >
            佛七報到
          </router-link>
        </div>

        <!-- 皈依報名 -->
        <a
          data-bs-toggle="collapse"
          class="sidebar-link d-flex justify-content-between fs-5"
          href="#menu-refuge"
          role="button"
        >
          <div class="mb-0 d-flex align-items-center">
            <span class="material-icons-outlined me-2">person_add_alt</span>
            皈依報名
          </div>
          <span class="material-icons-outlined"> keyboard_arrow_down </span>
        </a>

        <!-- 皈依報名選單 -->
        <div class="collapse ps-4" id="menu-refuge">
          <router-link
            to="/customer-service/taking-refuge-app"
            class="
              sidebar-link
              border-start border-neutral-40 border-4
              rounded-0 rounded-end
              fs-5
              ms-5
              d-flex
            "
          >
            報名皈依
          </router-link>
          <router-link
            to="/customer-service/taking-refuge-list"
            class="
              sidebar-link
              border-start border-neutral-40 border-4
              rounded-0 rounded-end
              fs-5
              ms-5
              d-flex
            "
          >
            皈依報名名單
          </router-link>
          <router-link
            to="/customer-service/create-refuge-data"
            class="
              sidebar-link
              border-start border-neutral-40 border-4
              rounded-0 rounded-end
              fs-5
              ms-5
              d-flex
            "
          >
            皈依資料建檔
          </router-link>
        </div>

        <!-- 參訪及活動 -->
        <a
          data-bs-toggle="collapse"
          class="sidebar-link d-flex justify-content-between fs-5"
          href="#menu-activity"
          role="button"
        >
          <div class="mb-0 d-flex align-items-center">
            <span class="material-icons-outlined me-2">event</span>
            參訪及活動
          </div>
          <span class="material-icons-outlined"> keyboard_arrow_down </span>
        </a>

        <!-- 參訪及活動選單  連結頁面待製作，完成後請將 active-class="none" 移除-->
        <div class="collapse ps-4" id="menu-activity">
          <router-link
            to="#"
            class="
              sidebar-link
              border-start border-neutral-40 border-4
              rounded-0 rounded-end
              fs-5
              ms-5
              d-flex
            "
            active-class="none"
          >
          來寺參訪預約
          </router-link>
          <router-link
            to="#"
            class="
              sidebar-link
              border-start border-neutral-40 border-4
              rounded-0 rounded-end
              fs-5
              ms-5
              d-flex
            "
            active-class="none"
          >
          活動人數登記
          </router-link>
        </div>
      </div>

      <!-- 寮房 -->
      <a data-bs-toggle="collapse" class="sidebar-link" href="#" role="button">
        <div class="d-flex justify-content-between fs-5">
          <p class="mb-0 d-flex align-items-center">
            <span class="material-icons-outlined me-2">bed</span>
            寮房
          </p>
          <span class="material-icons-outlined"> keyboard_arrow_down </span>
        </div>
      </a>

      <!-- 四眾個人資料 -->
      <a data-bs-toggle="collapse" class="sidebar-link" href="#" role="button">
        <div class="d-flex justify-content-between fs-5">
          <p class="mb-0 d-flex align-items-center">
            <span class="material-icons-outlined me-2">description</span>
            四眾個人資料
          </p>
          <span class="material-icons-outlined"> keyboard_arrow_down </span>
        </div>
      </a>

      <!-- 查詢用齋人數 -->
      <a data-bs-toggle="collapse" class="sidebar-link" href="#" role="button">
        <div class="d-flex justify-content-between fs-5">
          <p class="mb-0 d-flex align-items-center">
            <span class="material-icons-outlined me-2">local_dining</span>
            查詢用齋人數
          </p>
          <span class="material-icons-outlined"> keyboard_arrow_down </span>
        </div>
      </a>

      <!-- 登出按鈕 -->
      <a class="sidebar-link mt-auto" data-js="logoutBtn">
        <div class="d-flex align-items-center fs-5" data-js="logoutBtn">
          <span class="material-icons-outlined me-2">logout</span>
          登出
        </div>
      </a>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
};
</script>
