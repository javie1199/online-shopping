import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "./SHOP_DATA";

class ShopPage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const collections = this.state.collections;
    return (
      <div>
        {collections.map(({ id, ...otherCollectionsProps }) => (
          <CollectionPreview key={id} {...otherCollectionsProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
