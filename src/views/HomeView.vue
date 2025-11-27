<script setup lang="ts">
import { ref } from 'vue'

interface Protocol {
  name: string
  scheme: string
  description: string
  icon: string
  color: string
}

const protocols = ref<Protocol[]>([
  {
    name: 'Base64 加解密示例',
    scheme:
      'venom://codec/rT8z28Xznztze4/H5kYPvyu24GwluxUnd4R/CHy/lLYuFi9ye3IwXg09dGUu6vbIIlQcaaTkDY9E3rofK4Hpke5E1d6Nv9DQIo3zt8/UtUM9ybb/Il5AxAS7IWC8qGt0S7SlRzzu74d9BxzkNEx+xYsPX8k9JkvrIG3YuKIELiMCW9lqfLMePj18P0LF5Cjp1o+vRn0ZJEM2uCqedCoZim78yc4c6CKUGBbusJBk/HAt0SZUPrReCLd8fYkFJ/udIAGJr+Bys//cr6QwHxS6iv0yNKn2A0pMZhMjHHHIfEWHZCDarEvLLe/jSUNsnY2mvcp9YYNP/eCkA+Wv3RJJLs5swRM6NxmgVzLtr9+tPtSeYLKRU3wBV7bPrgkiaNEtT1u5vjaZik3TeuTNr8IVln1qkpBeb5x5LuLBCUnUSBvkbWg8TBkXbYd4+Es3+oXwNSiyN30WO8RuqBUwzpFNQ7/Vk34nNdYbYH4LxfTa+GWCDoNPlC/zdScAgqQcQ9IwA3wqCcMPBPskwhLbN+5cGpg1sTYy+sExZLeBKZ9kVc12YtBxDK0jtywX+r39J1pnVLhgUgFW2V4sM826xNA3d1Ut+lxzmmzfrB0hhMEprb2T3qEGFIvw11L',
    description: '演示 Base64 编码和解码工作流。点击加载示例配置，快速体验编解码功能。',
    icon: '🔄',
    color: '#3b82f6',
  },
  {
    name: 'Rsa 加解密示例',
    scheme:
      'venom://codec/VoxolCNcw5QvEmy7n0a0PdKWFOJmgEH+ChJRdqhEdn3tDQ8KFi25kUje+JgYeRMDG02eg6DbzFZXxHG5sgNzOCCbojrWQ0qBco560lGFgdoPvwj35YIgTqWZdeadj7i3N9B2GdboJxIMHRm4e7pF5Q3KmnQ7/PTFh7bjisOP5+RxiA1CcakwW46NzmaLH+TaoH4lq2tLJmV0y1VYMR0GiD2d9yaCE0RLHG1DsV04Glby7m00FD2iYqNIuAZOdV3nlg5H0OEqft31h9kesA9JzlDPX6Govc65rXhmluY+KEPb2oQTg8s/gvjfVO25BqIonD3FS+xGhPFkUwe6LJNCQcKyUZal8zvtODv5lxIXxPcSCX5osV/vUECK0pEc750OwdkjJx7zrRlSyXTi20BgOxN4ezEat8813LlxzHcspQRPIFjzpR71V59YaB7pLAasKatrTKfd4t7TYAw1meTaepWxZK2meJAcRoNwcBt/fzfsVJTVTma9yU4dJXi99ijhmAqdHvB621jJLdP7WqgkF9RSjmB+ONj3Yjk9cZA4+ZD/YxNO6YfCM0kljz3iE0y2tf9JfsM9JpODqCJ2bIiYal8uxpExR0qEVNggGvZebB3ekqZb9xoqAHSq+iqvFVRXIWkExIyB0TdnBu3r8iwZUNTfbyGFmGglIhhrJGgMaDCxLj6o/UA+G4vuGg1V7edHRma8AjqzCY3L+XYosrffKqeDXt9zlBbN//F9Zf6UYPFpwRGBwN3RJ2GpN0KR5F3wf75C7zhfDO/bieKcUmn7tB6ZLy+6+z5BlRz3jhefyChdSRZvTNrKesMlymhWDTnNzN+jTuliyksr/ZZUUqayATOJ7u4gaFrOygrHDxApdURHOxUBlPr2nHc72EJW6Wtq0vkTJWph+KA+tONmFXoewen2Kzd/oEqJMGl9OmMe0gICXEAZXn8H8qw7/95BP8JkKsjps4ztgdt1TO+AcgX1bALeR6lg0F/j3T+BIKR+4kkFaDkMzE2gNjkyNCSNy074sKs1p/jUWU1g+JFEkNrz077TBkOg4qfaO2rvjWo6kDx/M+nEwNtlF43PFqFshrfFS0JhKyoX3n3SM6nIiQ1fMdUKB51f2I7H3qGiKTvXtsl00nP2YYbtldWRCbHgh4/1dlyAuU4XooeOc5EbARyxSEoWx4Z+hQFmMv0WoerrhVN7CyWEa+IBi/vSC+QX71lIHeJg0H4RnYiUjiAkilBea9T8Saw1tqC3c420vMFJ4MrlHgrvp1Ldy010fY/qzpWO89+AN/VadkN+w0LQzRrpWeXJmSZeFQUlZrI9djtn13HDXLPBOnDB7tMRNu1cHtsagaid5li86Z6D0GPSnBL9zA+Ch0VHDiHpbcw6+GOM5W/dX5xh9NZdIma2R4vFw89zfuh2z9Fy3VA2wLF/l5DkVMHzLUXsncOil689rOjs0HumjNWZwJjifSgepm/JqUFVdwrkQkraIA8F1oXUvBtDwNJ6L06WXHCngubiU1aoEyuC8QsvWDvHXoO89/tlm3KIZwvq7ZHyT0oakUnHfIzKHiRRxWDDpo4UmCfN+ivbpVvmXUGJjimeDvChKUdzPuFkpX8NZMiYKyta/Qopv2RCWq3Ef2uxzxVn8Xtrjavj7ChcE8nRut5x5ru3/gJ45fdwIQBw6kDJadgjWlSGFyBqC3gw6rwblYFIBrawPE4i33ey1DNyUopU4XAC+9cyRwC5aGvBZCBukMFvrybUaqD8IR0QTxTdoi2D8gRQSooFkFIVsV+YiPbPrdOWTYdJg9akM3GGaWkmi93PV871LEczI0EfKIqXLN0anft2+uhmW+z1yo44w40SX49sbrJz9ktAciTrdQc=',
    description: '演示 Rsa 加密和解密工作流。点击加载示例配置，快速体验加解密功能。',
    icon: '🔄',
    color: '#3b82f6',
  },
  {
    name: '自定义数据处理示例',
    scheme:
      'venom://codec/VCSVH2UUzUx4/mSk+CU3PyTy6Tqh4XtXLKVbLD8VF5Ob1ip43959yJB6F37izwZIYnT+xLtWkZfLU1w4AYJN2neqz+dw5twgANfq2xPfeZQx/+msDOK2Ni7a0cxurNOSKuawdH7WTNsm2N3tIMWFKIkkqMJxkQK6IGWAE4UCuDhN5CvS6fFPChsDlH7c/TQOuCHa+tAmMnNsU8RPGxpsilYlVF81cgTpVAfkZIwnwZ8gBqyX4QDNy2xKmDWBBQVkRQC26Y2dlpgUJlYldavH9yUQLY75UpJfhpQg+osDRklPp0cD+f6qNQ7nc/bEjHlDqY8ysMeR5cr/oKsxWG9lsWoxucGsh7rNtD1OYIgb2AM9A2pRnlFNGSiAD/Zoksr70cup671BoHnpQEvPXtTlekiyBAPGKaG1X3u7HZAYA4J5tfVOMc4dSOR2vpRVSSXcLEl9udzBYCAVWpnCIUsI2voxjD397VZXQSnjl8QKZRVIQTSYc+TzIdjx7QlMYfMkwOWOsXbN1EXrGL7uhZNr+0V1D9UYlZbpobB8yWU8v9WFse5WITLPvSAGfrpzh1ERckpho1RIWw3WWX4JnrOC/WSkSPcgLtOOry5dsy7qOpeD4KLkyb3qekvaHhzTK/WeJjFyQGQkIdZrNn9riCk57cdxEJwwiBZCZbYuHrqLtmmGro7Udjd+rFk5oHbo+GY2ymFI2d7lBQ1ZShYYuK4c5/Y59DuA8ktQEvNDTmfZaKYdeqrG72a2CoA1giqtJVaTV+h21x4Gs4VRGF2ou+NgFHk/nzbrp5mpQQm1AbZWL+sRdwn81nux0eDQjkZTPethdSx50c2Av2jVtdw/E5vlb2lIWqx0DEAVEWJc4vKGm1LDGRmU0F9TyCwtnf5dfI4uo+djDskN98LgfexyWU4yEPpLuVNrv7ZIqM+gkXDE8KHzZBHd+kDiUTtXC2lkkRvAr/LYDmtGOkZozc0BG4piWOdLrTwIs6hsLaazP4ZvHOwqbFuxjSt+Pxx84H0IIfY2oq26Z7GU20pajiY5rh8teWWZDONZbOt/+n86dNU0FLrdxrqHr5hJ3gRp80Zup7MVhyL0kTO9Ep3eLiSkJibZ/EKUpT91ec8n+V8DlqIXONFhlketFEdscvL0VoFMdnVgKg==',
    description: '演示自定义数据处理工作流。点击加载示例配置，快速体验数据处理功能。',
    icon: '🔄',
    color: '#3b82f6',
  },
])

const launchProtocol = (scheme: string) => {
  window.location.href = scheme
}
</script>

<template>
  <main class="container">
    <div class="header">
      <h1 class="title">加解密示例</h1>
      <p class="subtitle">选择一个示例以开始</p>
    </div>

    <div class="grid">
      <div
        v-for="proto in protocols"
        :key="proto.name"
        class="card glass-card"
        @click="launchProtocol(proto.scheme)"
      >
        <div class="card-content">
          <div class="card-header">
            <span class="card-icon" :style="{ color: proto.color }">{{ proto.icon }}</span>
            <h3 class="card-title">{{ proto.name }}</h3>
          </div>
          <p class="card-description">{{ proto.description }}</p>
        </div>
        <div class="card-glow" :style="{ background: proto.color }"></div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
  letter-spacing: -0.5px;
}

.subtitle {
  font-size: 1rem;
  color: var(--color-text);
  opacity: 0.6;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.card {
  padding: 1.5rem;
  border-radius: 16px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  height: 100%;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.card:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.1);
}

.card-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.card-icon {
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
}

.card-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-heading);
}

.card-description {
  font-size: 0.875rem;
  color: var(--color-text);
  opacity: 0.7;
  line-height: 1.6;
}

.card-glow {
  position: absolute;
  top: 0;
  right: 0;
  width: 120px;
  height: 120px;
  filter: blur(50px);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
  z-index: 0;
  transform: translate(30%, -30%);
}

.card:hover .card-glow {
  opacity: 0.2;
}
</style>
