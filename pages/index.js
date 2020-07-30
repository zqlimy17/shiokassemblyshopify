import { Page, Layout, EmptyState } from "@shopify/polaris";
import { TitleBar, ResourcePicker } from "@shopify/app-bridge-react";
const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

class Index extends React.Component {
    state = { open: false };

    handleSelection = (resources) => {
        const idsFormResources = resources.selection.map(
            (product) => product.id
        );
        this.setState({ open: false });
        console.log(idsFormResources);
    };

    render() {
        return (
            <Page>
                <TitleBar
                    title='Shiok Assembly'
                    primaryAction={{
                        content: "Select Products",
                        onAction: () => this.setState({ open: true }),
                    }}
                />
                <ResourcePicker
                    resourceType='Product'
                    showVariants={false}
                    open={this.state.open}
                    onSelection={(resources) => this.handleSelection(resources)}
                    onCancel={() => this.setState({ open: false })}
                />
                <Layout>
                    <EmptyState
                        heading='Discount your products temporarily'
                        action={{
                            content: "Select products",
                            onAction: () => this.setState({ open: true }),
                        }}
                        image={img}
                    >
                        <p>
                            Select products to change their price temporarily.
                        </p>
                    </EmptyState>
                </Layout>
            </Page>
        );
    }
}

export default Index;
