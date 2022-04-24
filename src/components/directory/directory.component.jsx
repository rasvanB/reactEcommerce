import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: "mice",
                    imageUrl:
                        "https://resource.logitechg.com/e_trim/w_652,ar_4:3,c_limit,q_auto,f_auto/w_692,h_519,c_lpad,b_rgb:2f3132,dpr_auto/d_transparent.gif/content/dam/gaming/en/products/pro-x-superlight/pro-x-superlight-black-gallery-1.png?v=1",
                    size: "large",
                    id: 5,
                    linkUrl: "shop/mens",
                },
                {
                    title: "keyboards",
                    imageUrl:
                        "https://d11m57zb51lyt1.cloudfront.net/media/wysiwyg/g413-feature-8.png",
                    size: "large",
                    id: 4,
                    linkUrl: "shop/womens",
                },
                {
                    title: "mouse pads",
                    imageUrl:
                        "https://cdn1.dotesports.com/wp-content/uploads/2021/07/02160456/https___hybrismediaprod.blob_.core_.windows.net_sys-master-phoenix-images-container_h13_h5d_9081442959390_gigantusV2-prodpg-gallery-1500x1000-hero-1-768x432.jpg",
                    id: 1,
                    linkUrl: "shop/hats",
                },
                {
                    title: "headsets",
                    imageUrl:
                        "https://www.techweekmag.com/wp-content/uploads/2021/02/Best-gaming-headsets-2021.jpeg",
                    id: 2,
                    linkUrl: "shop/jackets",
                },
                {
                    title: "streaming & recording",
                    imageUrl:
                        "https://www.ubuy.rw/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFudmlWdHNuREwuX0FDX1NMMTUwMF8uanBn.jpg",
                    id: 3,
                    linkUrl: "shop/sneakers",
                },
            ],
        };
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ title, imageUrl, id, size }) => {
                    return (
                        <MenuItem
                            key={id}
                            imageUrl={imageUrl}
                            title={title}
                            size={size}
                        ></MenuItem>
                    );
                })}
            </div>
        );
    }
}

export default Directory;
