type Props = {
    params: {
        id: string
    }
}
export default function Post({params: { id }}: Props) {
    return <div>Post page{id }</div>;
}
