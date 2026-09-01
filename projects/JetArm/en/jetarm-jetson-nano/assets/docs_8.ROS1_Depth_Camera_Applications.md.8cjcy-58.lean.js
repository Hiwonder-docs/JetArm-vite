import { _ as _imports_8, a as _imports_10, b as _imports_11, c as _imports_13 } from "./chunks/3.30dWZ3As.js";
import { _ as _export_sfc, o as openBlock, c as createElementBlock, ah as createStaticVNode, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.sdIqiAaL.js";
const _imports_0 = "/projects/JetArm/en/jetarm-jetson-nano/assets/image4.BB8nzSAp.webp";
const _imports_1 = "/projects/JetArm/en/jetarm-jetson-nano/assets/image8.BbvzS2cu.webp";
const _imports_2 = "/projects/JetArm/en/jetarm-jetson-nano/assets/image13.NdaTpTVU.webp";
const _imports_3 = "/projects/JetArm/en/jetarm-jetson-nano/assets/image30.r4tX6o4o.webp";
const _imports_4 = "/projects/JetArm/en/jetarm-jetson-nano/assets/image37.C7aOKGhE.webp";
const _imports_5 = "/projects/JetArm/en/jetarm-jetson-nano/assets/image16.DODYWcge.webp";
const _imports_6 = "/projects/JetArm/en/jetarm-jetson-nano/assets/image44.BWX0SJ_Z.webp";
const _imports_7 = "/projects/JetArm/en/jetarm-jetson-nano/assets/image66.9ZrLyOF-.webp";
const _imports_9 = "/projects/JetArm/en/jetarm-jetson-nano/assets/image97.BKxm27pf.webp";
const _imports_12 = "/projects/JetArm/en/jetarm-jetson-nano/assets/image141.CKdICH0N.webp";
const _imports_14 = "/projects/JetArm/en/jetarm-jetson-nano/assets/image182.BTQljD-5.webp";
const __pageData = JSON.parse('{"title":"8. ROS1-Depth Camera Applications","description":"","frontmatter":{},"headers":[],"relativePath":"docs/8.ROS1_Depth_Camera_Applications.md","filePath":"docs/8.ROS1_Depth_Camera_Applications.md"}');
const _sfc_main = { name: "docs/8.ROS1_Depth_Camera_Applications.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode("", 22),
    createBaseVNode("p", { "lineno-start": "2" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "4" }, null, -1),
    createStaticVNode("", 18),
    createBaseVNode("p", { "lineno-start": "7" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "68" }, null, -1),
    createStaticVNode("", 1),
    createBaseVNode("ul", { "lineno-start": "19" }, [
      createBaseVNode("li", null, [
        createBaseVNode("strong", null, "Initialization Function of RgbDepthImageNode Class")
      ])
    ], -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "19" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "22" }, null, -1),
    createStaticVNode("", 1),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          createBaseVNode("strong", null, "Create Servo Publisher")
        ]),
        createBaseVNode("p", null, [
          createTextVNode("The "),
          createBaseVNode("code", null, "servos_pub"),
          createTextVNode(" creates a servo publisher, sending messages to the "),
          createBaseVNode("code", null, "/controllers/multi_id_pos_dur"),
          createTextVNode(" topic. Here, "),
          createBaseVNode("code", null, "MultiRawIdPosDur"),
          createTextVNode(" is the message type used to control the positions and durations of multiple servos.")
        ]),
        createBaseVNode("p", null, [
          createTextVNode("The "),
          createBaseVNode("code", null, "set_servos"),
          createTextVNode(" function from the "),
          createBaseVNode("code", null, "bus_servo_control"),
          createTextVNode(" module is utilized to set the initial position and duration of the servos. The parameters include the publisher instance, servo runtime (in milliseconds), and a tuple containing the IDs and rotation angles (ranging from 1-1000) of multiple servos.")
        ]),
        createBaseVNode("p", { "lineno-start": "24" }),
        createBaseVNode("div", { class: "language- vp-adaptive-theme" }, [
          createBaseVNode("button", {
            title: "Copy Code",
            class: "copy"
          }),
          createBaseVNode("span", { class: "lang" }),
          createBaseVNode("pre", {
            class: "shiki shiki-themes github-light github-dark vp-code",
            tabindex: "0"
          }, [
            createBaseVNode("code", null, [
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        self.servos_pub = rospy.Publisher('/controllers/multi_id_pos_dur', MultiRawIdPosDur, queue_size=1)")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        rospy.sleep(3)")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        bus_servo_control.set_servos(self.servos_pub, 1000, ((1, 500), (2, 700), (3, 85), (4, 350), (5, 500), (10, 200)))")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        rospy.sleep(2)")
              ])
            ])
          ])
        ])
      ])
    ], -1),
    createBaseVNode("p", null, [
      createTextVNode("Wait for the "),
      createBaseVNode("code", null, "/rgbd_cam/set_ldp"),
      createTextVNode(" service to start. A service proxy is created, using the "),
      createBaseVNode("code", null, "SetBool"),
      createTextVNode(" message type to specify the request and response types for the service. "),
      createBaseVNode("code", null, "False"),
      createTextVNode(" is then passed to the "),
      createBaseVNode("code", null, "/rgbd_cam/set_ldp"),
      createTextVNode(" service.")
    ], -1),
    createBaseVNode("p", { "lineno-start": "29" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "34" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "36" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "37" }, null, -1),
    createStaticVNode("", 1),
    createBaseVNode("ul", { "lineno-start": "43" }, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          createBaseVNode("strong", null, "multi_callback Function")
        ]),
        createBaseVNode("p", null, [
          createTextVNode("The "),
          createBaseVNode("code", null, "multi_callback"),
          createTextVNode(" function receives ROS image messages, "),
          createBaseVNode("code", null, "ros_rgb_image"),
          createTextVNode(" and "),
          createBaseVNode("code", null, "ros_depth_image"),
          createTextVNode(".")
        ]),
        createBaseVNode("p", null, [
          createTextVNode("It checks whether "),
          createBaseVNode("code", null, "self.queue"),
          createTextVNode(" is empty. If the queue is empty, it places a tuple containing synchronized "),
          createBaseVNode("code", null, "ros_rgb_image"),
          createTextVNode(" and "),
          createBaseVNode("code", null, "ros_depth_image"),
          createTextVNode(" into the queue. This tuple represents two successfully synchronized image messages.")
        ]),
        createBaseVNode("p", { "lineno-start": "39" }),
        createBaseVNode("div", { class: "language- vp-adaptive-theme" }, [
          createBaseVNode("button", {
            title: "Copy Code",
            class: "copy"
          }),
          createBaseVNode("span", { class: "lang" }),
          createBaseVNode("pre", {
            class: "shiki shiki-themes github-light github-dark vp-code",
            tabindex: "0"
          }, [
            createBaseVNode("code", null, [
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "    def multi_callback(self, ros_rgb_image, ros_depth_image):")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        if self.queue.empty():")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "            self.queue.put_nowait((ros_rgb_image, ros_depth_image))")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          createBaseVNode("strong", null, "image_proc Function")
        ])
      ])
    ], -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "43" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "45" }, null, -1),
    createStaticVNode("", 4),
    createBaseVNode("p", { "lineno-start": "52" }, null, -1),
    createStaticVNode("", 5),
    createBaseVNode("p", { "lineno-start": "56" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "60" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "64" }, null, -1),
    createStaticVNode("", 21),
    createBaseVNode("p", { "lineno-start": "1" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "2" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "4" }, null, -1),
    createStaticVNode("", 18),
    createBaseVNode("p", { "lineno-start": "10" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "105" }, null, -1),
    createStaticVNode("", 1),
    createBaseVNode("ul", { "lineno-start": "22" }, [
      createBaseVNode("li", null, [
        createBaseVNode("strong", null, "Initialization Function of RgbDepthImageNode Class")
      ])
    ], -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "22" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "25" }, null, -1),
    createStaticVNode("", 4),
    createBaseVNode("p", { "lineno-start": "27" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "32" }, null, -1),
    createStaticVNode("", 10),
    createBaseVNode("p", { "lineno-start": "35" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "38" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "40" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "41" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "41" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "44" }, null, -1),
    createStaticVNode("", 1),
    createBaseVNode("ul", { "lineno-start": "47" }, [
      createBaseVNode("li", null, [
        createBaseVNode("strong", null, "click_callback Function")
      ])
    ], -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "47" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "50" }, null, -1),
    createStaticVNode("", 1),
    createBaseVNode("ul", { "lineno-start": "62" }, [
      createBaseVNode("li", null, [
        createBaseVNode("strong", null, "image_proc Function")
      ])
    ], -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "62" }, null, -1),
    createStaticVNode("", 4),
    createBaseVNode("p", { "lineno-start": "64" }, null, -1),
    createStaticVNode("", 5),
    createBaseVNode("p", { "lineno-start": "70" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "73" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "75" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "78" }, null, -1),
    createStaticVNode("", 4),
    createBaseVNode("p", { "lineno-start": "81" }, null, -1),
    createStaticVNode("", 5),
    createBaseVNode("p", { "lineno-start": "87" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "93" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "95" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "98" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "101" }, null, -1),
    createStaticVNode("", 21),
    createBaseVNode("p", { "lineno-start": "" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "2" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "4" }, null, -1),
    createStaticVNode("", 19),
    createBaseVNode("p", { "lineno-start": "9" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "21" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "23" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "26" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "29" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "48" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "55" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "56" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "110" }, null, -1),
    createStaticVNode("", 1),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          createBaseVNode("strong", null, "Create Servo Publisher")
        ]),
        createBaseVNode("p", null, [
          createTextVNode("The "),
          createBaseVNode("code", null, "servos_pub"),
          createTextVNode(" creates a servo publisher, sending messages to the "),
          createBaseVNode("code", null, "/controllers/multi_id_pos_dur"),
          createTextVNode(" topic. Here, "),
          createBaseVNode("code", null, "MultiRawIdPosDur"),
          createTextVNode(" is the message type used to control the positions and durations of multiple servos.")
        ]),
        createBaseVNode("p", null, [
          createTextVNode("The "),
          createBaseVNode("code", null, "set_servos"),
          createTextVNode(" function from the "),
          createBaseVNode("code", null, "bus_servo_control"),
          createTextVNode(" module is utilized to set the initial position and duration of the servos. The parameters include the publisher instance, servo runtime (in milliseconds), and a tuple containing the IDs and rotation angles (ranging from 1-1000) of multiple servos.")
        ]),
        createBaseVNode("p", { "lineno-start": "122" }),
        createBaseVNode("div", { class: "language- vp-adaptive-theme" }, [
          createBaseVNode("button", {
            title: "Copy Code",
            class: "copy"
          }),
          createBaseVNode("span", { class: "lang" }),
          createBaseVNode("pre", {
            class: "shiki shiki-themes github-light github-dark vp-code",
            tabindex: "0"
          }, [
            createBaseVNode("code", null, [
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "    servos_pub = rospy.Publisher('/controllers/multi_id_pos_dur', MultiRawIdPosDur, queue_size=1)")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "    rospy.sleep(2)")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "    bus_servo_control.set_servos(servos_pub, 1000, ((1, 500), (2, 560), (3, 160), (4, 80), (5, 500), (10, 200)))")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "    rospy.sleep(3)")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          createBaseVNode("strong", null, "Wait for /rgbd_cam/set_ldp Service to Initiate")
        ]),
        createBaseVNode("p", null, [
          createTextVNode("Create a service proxy, and use "),
          createBaseVNode("code", null, "SetBool"),
          createTextVNode(" message type to specify the service request and response type.")
        ]),
        createBaseVNode("p", null, [
          createTextVNode("Convey "),
          createBaseVNode("code", null, "False"),
          createTextVNode(" to "),
          createBaseVNode("code", null, "/rgbd_cam/set_ldp"),
          createTextVNode(" service.")
        ]),
        createBaseVNode("p", { "lineno-start": "127" }),
        createBaseVNode("div", { class: "language- vp-adaptive-theme" }, [
          createBaseVNode("button", {
            title: "Copy Code",
            class: "copy"
          }),
          createBaseVNode("span", { class: "lang" }),
          createBaseVNode("pre", {
            class: "shiki shiki-themes github-light github-dark vp-code",
            tabindex: "0"
          }, [
            createBaseVNode("code", null, [
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "    rospy.wait_for_service('/rgbd_cam/set_ldp')")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "    rospy.ServiceProxy('/rgbd_cam/set_ldp', SetBool)(False)")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "    rospy.sleep(1)")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          createBaseVNode("strong", null, "Create Visualization Window")
        ])
      ])
    ], -1),
    createBaseVNode("p", null, "Create a window and configure the following parameters: window name (point cloud), width, height, and visibility status.", -1),
    createBaseVNode("p", { "lineno-start": "133" }, null, -1),
    createStaticVNode("", 10),
    createBaseVNode("p", { "lineno-start": "137" }, null, -1),
    createStaticVNode("", 1),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          createBaseVNode("strong", null, "multi_callback Function")
        ]),
        createBaseVNode("p", { "lineno-start": "63" }),
        createBaseVNode("div", { class: "language- vp-adaptive-theme" }, [
          createBaseVNode("button", {
            title: "Copy Code",
            class: "copy"
          }),
          createBaseVNode("span", { class: "lang" }),
          createBaseVNode("pre", {
            class: "shiki shiki-themes github-light github-dark vp-code",
            tabindex: "0"
          }, [
            createBaseVNode("code", null, [
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "def multi_callback(ros_rgb_image, ros_depth_image):")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "    global get_point, t0")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "    ")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "    try:")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        # ros格式转为numpy(convert ros format to numpy)")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        image_rgb = np.ndarray(shape=(ros_rgb_image.height, ros_rgb_image.width, 3), dtype=np.uint8, buffer=ros_rgb_image.data)")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        depth_image = np.ndarray(shape=(ros_depth_image.height, ros_depth_image.width), dtype=np.uint16, buffer=ros_depth_image.data)")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        # 统一分辨率为640x400(standardize the resolution to 640x400)")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        image_rgb = image_rgb[40:440, ]")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "      ")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        o3d_image_rgb = o3d.geometry.Image(image_rgb)")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        o3d_image_depth = o3d.geometry.Image(np.ascontiguousarray(depth_image))        ")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        ")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        # rgbd --> point_cloud")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        rgbd_image = o3d.geometry.RGBDImage.create_from_color_and_depth(o3d_image_rgb, o3d_image_depth, convert_rgb_to_intensity=False)")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        # cpu占用大 (high CPU usage)")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        pc = o3d.geometry.PointCloud.create_from_rgbd_image(rgbd_image, intrinsic)#, extrinsic=extrinsic)")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        ")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        '''")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        # numpy格式转为open3d格式(convert numpy format to open3d format)")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        o3d_image_rgb = o3d.t.geometry.Image(o3d.core.Tensor(image_rgb, dtype=o3d.core.Dtype.UInt8, device=device))")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        o3d_image_depth = o3d.t.geometry.Image(o3d.core.Tensor(np.ascontiguousarray(depth_image), dtype=o3d.core.Dtype.Float32, device=device))       ")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        ")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        # rgb depth ---> rgbd")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        rgbd = o3d.t.geometry.RGBDImage(o3d_image_rgb, o3d_image_depth)")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        ")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        # rgbd ---> point cloud")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        point_cloud = o3d.t.geometry.PointCloud.create_from_rgbd_image(rgbd, intrinsic)#, extrinsic)")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        ")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        # 取出gpu的数据(retrieve data from the GPU)")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        pc = point_cloud.to_legacy()")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        '''")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        # 裁剪(crop)")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        roi_pc = pc#vol.crop_point_cloud(pc)")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        ")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        target_cloud.points = roi_pc.points")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        target_cloud.colors = roi_pc.colors")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        # 转180度方便查看(rotate 180 degrees for easier viewing)")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        target_cloud.transform(np.asarray([[1, 0, 0, 0], [0, -1, 0, 0], [0, 0, -1, 0], [0, 0, 0, 1]]))")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        get_point = True")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        fps = int(1.0/(rospy.get_time() - t0))")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        print('\\r', 'FPS: ' + str(fps), end='')")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "    except BaseException as e:")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        print('callback error:', e)")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "    t0 = rospy.get_time()")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          createBaseVNode("strong", null, "Convert ros-Formatted Image into numpy")
        ]),
        createBaseVNode("p", null, [
          createTextVNode("Arrays in NumPy, namely "),
          createBaseVNode("code", null, "image_rgb"),
          createTextVNode(" and "),
          createBaseVNode("code", null, "depth_image"),
          createTextVNode(", have been created to store RGB and depth image data, facilitating subsequent processing of both types of images.")
        ]),
        createBaseVNode("p", { "lineno-start": "66" }),
        createBaseVNode("div", { class: "language- vp-adaptive-theme" }, [
          createBaseVNode("button", {
            title: "Copy Code",
            class: "copy"
          }),
          createBaseVNode("span", { class: "lang" }),
          createBaseVNode("pre", {
            class: "shiki shiki-themes github-light github-dark vp-code",
            tabindex: "0"
          }, [
            createBaseVNode("code", null, [
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "    try:")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        # ros格式转为numpy(convert ros format to numpy)")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        image_rgb = np.ndarray(shape=(ros_rgb_image.height, ros_rgb_image.width, 3), dtype=np.uint8, buffer=ros_rgb_image.data)")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        depth_image = np.ndarray(shape=(ros_depth_image.height, ros_depth_image.width), dtype=np.uint16, buffer=ros_depth_image.data)")
              ])
            ])
          ])
        ]),
        createBaseVNode("p", null, [
          createTextVNode("A region is cropped from the original RGB image ("),
          createBaseVNode("code", null, "rgb_image"),
          createTextVNode("), specifically from pixel coordinates 40 rows to 440 rows.")
        ]),
        createBaseVNode("p", null, [
          createTextVNode("The NumPy arrays "),
          createBaseVNode("code", null, "image_rgb"),
          createTextVNode(" and "),
          createBaseVNode("code", null, "depth_image"),
          createTextVNode(" are then converted into Open3D image objects ("),
          createBaseVNode("code", null, "o3d_image_rgb"),
          createTextVNode("). This conversion allows for processing and visualization within Open3D, establishing a foundational data basis for subsequent point cloud creation and processing.")
        ]),
        createBaseVNode("p", { "lineno-start": "71" }),
        createBaseVNode("div", { class: "language- vp-adaptive-theme" }, [
          createBaseVNode("button", {
            title: "Copy Code",
            class: "copy"
          }),
          createBaseVNode("span", { class: "lang" }),
          createBaseVNode("pre", {
            class: "shiki shiki-themes github-light github-dark vp-code",
            tabindex: "0"
          }, [
            createBaseVNode("code", null, [
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        image_rgb = image_rgb[40:440, ]")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "      ")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        o3d_image_rgb = o3d.geometry.Image(image_rgb)")
              ]),
              createTextVNode("\n"),
              createBaseVNode("span", { class: "line" }, [
                createBaseVNode("span", null, "        o3d_image_depth = o3d.geometry.Image(np.ascontiguousarray(depth_image))")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          createBaseVNode("strong", null, "Generate rgbd Image")
        ])
      ])
    ], -1),
    createBaseVNode("p", null, [
      createTextVNode("An RGB-D (Color-Depth) image object, named "),
      createBaseVNode("code", null, "rgbd_image"),
      createTextVNode(", has been created, comprising the color image ("),
      createBaseVNode("code", null, "o3d_image_rgb"),
      createTextVNode(") and the depth image ("),
      createBaseVNode("code", null, "o3d_image_depth"),
      createTextVNode(").")
    ], -1),
    createBaseVNode("p", null, [
      createTextVNode("Within this function call, the parameter "),
      createBaseVNode("code", null, "convert_rgb_to_intensity"),
      createTextVNode(" is set to "),
      createBaseVNode("code", null, "False"),
      createTextVNode(". This indicates that color information will not be converted into intensity information.")
    ], -1),
    createBaseVNode("p", { "lineno-start": "76" }, null, -1),
    createStaticVNode("", 4),
    createBaseVNode("p", { "lineno-start": "79" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "96" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "100" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "103" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "106" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "140" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "142" }, null, -1),
    createStaticVNode("", 7),
    createBaseVNode("p", { "lineno-start": "145" }, null, -1),
    createStaticVNode("", 22),
    createBaseVNode("p", { "lineno-start": "1" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "2" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "4" }, null, -1),
    createStaticVNode("", 23),
    createBaseVNode("p", { "lineno-start": "10" }, null, -1),
    createStaticVNode("", 7),
    createBaseVNode("p", { "lineno-start": "30" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "214" }, null, -1),
    createStaticVNode("", 1),
    createBaseVNode("ul", { "lineno-start": "39" }, [
      createBaseVNode("li", null, [
        createBaseVNode("strong", null, "Initialization Function of RgbDepthImageNode Class")
      ])
    ], -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "39" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "43" }, null, -1),
    createStaticVNode("", 4),
    createBaseVNode("p", { "lineno-start": "53" }, null, -1),
    createStaticVNode("", 4),
    createBaseVNode("p", { "lineno-start": "58" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "60" }, null, -1),
    createStaticVNode("", 14),
    createBaseVNode("p", { "lineno-start": "62" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "66" }, null, -1),
    createStaticVNode("", 4),
    createBaseVNode("p", { "lineno-start": "71" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "117" }, null, -1),
    createStaticVNode("", 1),
    createBaseVNode("ul", { "lineno-start": "78" }, [
      createBaseVNode("li", null, [
        createBaseVNode("strong", null, "Pick Function")
      ])
    ], -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "79" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "98" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "100" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "87" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "91" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "100" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "98" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "100" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "121" }, null, -1),
    createStaticVNode("", 4),
    createBaseVNode("p", { "lineno-start": "123" }, null, -1),
    createStaticVNode("", 5),
    createBaseVNode("p", { "lineno-start": "132" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "136" }, null, -1),
    createStaticVNode("", 7),
    createBaseVNode("p", { "lineno-start": "140" }, null, -1),
    createStaticVNode("", 6),
    createBaseVNode("p", { "lineno-start": "144" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "151" }, null, -1),
    createStaticVNode("", 4),
    createBaseVNode("p", { "lineno-start": "156" }, null, -1),
    createStaticVNode("", 6),
    createBaseVNode("p", { "lineno-start": "164" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "170" }, null, -1),
    createStaticVNode("", 7),
    createBaseVNode("p", { "lineno-start": "176" }, null, -1),
    createStaticVNode("", 4),
    createBaseVNode("p", { "lineno-start": "190" }, null, -1),
    createStaticVNode("", 4),
    createBaseVNode("p", { "lineno-start": "196" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "202" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "204" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "208" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "211" }, null, -1),
    createStaticVNode("", 24),
    createBaseVNode("p", { "lineno-start": "1" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "2" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "3" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "5" }, null, -1),
    createStaticVNode("", 22),
    createBaseVNode("p", { "lineno-start": "7" }, null, -1),
    createStaticVNode("", 7),
    createBaseVNode("p", { "lineno-start": "31" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "328" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "106" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "109" }, null, -1),
    createStaticVNode("", 4),
    createBaseVNode("p", { "lineno-start": "118" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "123" }, null, -1),
    createStaticVNode("", 5),
    createBaseVNode("p", { "lineno-start": "126" }, null, -1),
    createStaticVNode("", 5),
    createBaseVNode("p", { "lineno-start": "40" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "48" }, null, -1),
    createStaticVNode("", 8),
    createBaseVNode("p", { "lineno-start": "53" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "54" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "55" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "57" }, null, -1),
    createStaticVNode("", 6),
    createBaseVNode("p", { "lineno-start": "61" }, null, -1),
    createStaticVNode("", 5),
    createBaseVNode("p", { "lineno-start": "76" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "83" }, null, -1),
    createStaticVNode("", 5),
    createBaseVNode("p", { "lineno-start": "103" }, null, -1),
    createStaticVNode("", 14),
    createBaseVNode("p", { "lineno-start": "136" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "142" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "150" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "154" }, null, -1),
    createStaticVNode("", 1),
    createBaseVNode("ul", { "lineno-start": "160" }, [
      createBaseVNode("li", null, [
        createBaseVNode("strong", null, "Gripping & Placing Function")
      ])
    ], -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "161" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "162" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "175" }, null, -1),
    createStaticVNode("", 6),
    createBaseVNode("p", { "lineno-start": "187" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "195" }, null, -1),
    createStaticVNode("", 5),
    createBaseVNode("p", { "lineno-start": "197" }, null, -1),
    createStaticVNode("", 6),
    createBaseVNode("p", { "lineno-start": "203" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "213" }, null, -1),
    createStaticVNode("", 5),
    createBaseVNode("p", { "lineno-start": "215" }, null, -1),
    createStaticVNode("", 20),
    createBaseVNode("p", { "lineno-start": "226" }, null, -1),
    createStaticVNode("", 11),
    createBaseVNode("p", { "lineno-start": "299" }, null, -1),
    createStaticVNode("", 8),
    createBaseVNode("p", { "lineno-start": "316" }, null, -1),
    createStaticVNode("", 22),
    createBaseVNode("p", { "lineno-start": "1" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "2" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "4" }, null, -1),
    createStaticVNode("", 21),
    createBaseVNode("p", { "lineno-start": "" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "279" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "38" }, null, -1),
    createStaticVNode("", 4),
    createBaseVNode("p", { "lineno-start": "50" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "55" }, null, -1),
    createStaticVNode("", 14),
    createBaseVNode("p", { "lineno-start": "58" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "62" }, null, -1),
    createStaticVNode("", 1),
    createBaseVNode("ul", { "lineno-start": "75" }, [
      createBaseVNode("li", null, [
        createBaseVNode("strong", null, "move Function")
      ])
    ], -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "76" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "104" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "101" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "114" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "119" }, null, -1),
    createStaticVNode("", 4),
    createBaseVNode("p", { "lineno-start": "121" }, null, -1),
    createStaticVNode("", 5),
    createBaseVNode("p", { "lineno-start": "133" }, null, -1),
    createStaticVNode("", 7),
    createBaseVNode("p", { "lineno-start": "139" }, null, -1),
    createStaticVNode("", 5),
    createBaseVNode("p", { "lineno-start": "144" }, null, -1),
    createStaticVNode("", 5),
    createBaseVNode("p", { "lineno-start": "150" }, null, -1),
    createStaticVNode("", 10),
    createBaseVNode("p", { "lineno-start": "153" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "178" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "226" }, null, -1),
    createStaticVNode("", 1),
    createBaseVNode("ul", { "lineno-start": "231" }, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          createBaseVNode("strong", null, "Estimate Pose and Execute Corresponding Action")
        ]),
        createBaseVNode("p", null, [
          createTextVNode("Examine contour information. If contour is not "),
          createBaseVNode("code", null, "None"),
          createTextVNode(", calculate the minimum enclosing circle of the object contour and retrieve the center point, camera intrinsics for that target.")
        ])
      ])
    ], -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "234" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "236" }, null, -1),
    createStaticVNode("", 3),
    createBaseVNode("p", { "lineno-start": "222" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "266" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "268" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "271" }, null, -1),
    createStaticVNode("", 2),
    createBaseVNode("p", { "lineno-start": "275" }, null, -1),
    createStaticVNode("", 1)
  ])]);
}
const _8_ROS1_Depth_Camera_Applications = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _8_ROS1_Depth_Camera_Applications as default
};
