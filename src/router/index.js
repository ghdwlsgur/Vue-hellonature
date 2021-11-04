import Vue from 'vue'
import VueRouter from 'vue-router'
/* mypage_home */
import MypageHome from '@/views/home/mypage_section_type1_home.vue'
import OrderList1 from '@/views/home/orderlist1.vue'
import OrderList2 from '@/views/home/orderlist2.vue'
import OrderList3 from '@/views/home/orderlist3.vue'
import OrderList4 from '@/views/home/orderlist4.vue'
/* mypage_section1 */
import MypageSection1 from '@/views/section1/mypage_section_type1.vue'
import ProductInq from '@/views/section1/product_inq.vue'
import Shipping from '@/views/section1/shipping.vue'
import Mantoman from '@/views/section1/mantoman.vue'
import EnrollMantoman from '@/views/section1/enroll_mantoman.vue'
import Post from '@/views/section1/post.vue'
import TheGreen from '@/views/section1/thegreen.vue'
import EditOne from '@/views/section1/edit1.vue'
import EditTwo from '@/views/section1/edit2.vue'
import EnrollProductInq from '@/views/section1/enroll_product_inq'
/* mypage_section2 */
import MypageSection2 from '@/views/section2/mypage_section_type2_home.vue'
import Center from '@/views/section2/center.vue'
import FaqCenter from '@/views/section2/faq_center.vue'
import NewsCenter from '@/views/section2/news_center.vue'
import InnewsCenter from '@/views/section2/innews_center.vue'
/* mypage_section3 */
import MypageSection3 from '@/views/section3/mypage_section_type3_home.vue'
import HelloCash from '@/views/section3/hellocash.vue'
import Coupon from '@/views/section3/coupon.vue'
import HelloPass from '@/views/section3/hellopass.vue'
import HelloPay from '@/views/section3/hellopay.vue'
/* mypage_coupon */
import UsedCoupon from '@/views/coupon/used_coupon.vue'
import AvailableCoupon from '@/views/coupon/available_coupon.vue'

/* 연습용 */
import Practice from '@/views/practice.vue'

Vue.use(VueRouter)

const routes = [
  /* mypage_home */
  {
    path: '/',
    name: 'mypage_section_type1_home',
    component: MypageHome,
    children: [
      {
        path: '/orderlist1',
        name: 'mypage_orderlist1',
        component: OrderList1
      },
      {
        path: '/orderlist2',
        name: 'mypage_orderlist2',
        component: OrderList2
      },
      {
        path: '/orderlist3',
        name: 'mypage_orderlist3',
        component: OrderList3
      },
      {
        path: '/orderlist4',
        name: 'mypage_orderlist4',
        component: OrderList4
      }
    ]
  },
  /* mypage_section1 */
  {
    path: '/mypage',
    name: 'mypage_section_type1',
    component: MypageSection1,
    children: [      
      {
        path: '/shipping',
        name: 'mypage_shipping',
        component: Shipping
      },
      {
        path: '/post',
        name: 'mypage_post',
        component: Post
      },              
      {
        path: '/thegreen',
        name: 'mypage_thegreen',
        component: TheGreen
      },
      {
        path: '/product_inq',
        name: 'mypage_product_inq',
        component: ProductInq
      }, 
      {
        path: '/enroll_product_inq',
        name: 'mypage_enroll_product_inq',
        component: EnrollProductInq
      },     
      {
        path: '/mantoman',
        name: 'mypage_mantoman',
        component: Mantoman
      },
      {
        path: '/enroll_mantoman',
        name: 'mypage_enroll_mantoman',
        component: EnrollMantoman
      },  
      {
        path: '/edit1',
        name: 'mypage_edit1',
        component: EditOne,
        children: [
          {
            path: '/edit2',
            name: 'mypage_edit2',
            component: EditTwo
          }
        ]
      }
    ]
  },
   /* mypage_section2 */
  {
    path: '/center_home',
    name: 'mypage_section_type2_home',
    component: MypageSection2,
    children: [
      {
        path: '/center',
        name: 'mypage_center',
        component: Center
      },
      {
        path: '/faq_center',
        name: 'mypage_faqcenter',
        component: FaqCenter
      },
      {
        path: '/news_center',
        name: 'mypage_newscenter',
        component: NewsCenter
      },
      {
        path: '/innews_center',
        name: 'mypage_innews',
        component: InnewsCenter
      }
    ]
  },
  /* mypage_section3 */
  {
    path: '/hellocash_home',
    name: 'mypage_section_type3_home',
    component: MypageSection3,
    children: [
      {
        path: '/hellocash',
        name: 'mypage_hellocash',
        component: HelloCash
      },
      {
        path: '/coupon',
        name: 'mypage_coupon',
        component: Coupon,
        children: [
          {
            path: '/used_coupon',
            name: 'used_coupon',
            component: UsedCoupon
          },
          {
            path: '/available_coupon',
            name: 'available_coupon',
            component: AvailableCoupon
          }
        ]
      },
      {
        path: '/hellopay',
        name: 'mypage_hellopay',
        component: HelloPay
      },
      {
        path: '/hellopass',
        name: 'mypage_hellopass',
        component: HelloPass
      }
    ] 
  },
  {
    path: '/practice',
    name: 'practice_vue',
    component: Practice
  }  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
