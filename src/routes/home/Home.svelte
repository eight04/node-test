<script>
import Test from '../../components/Test.svelte';
</script>

<Test --color="red" text="test1"/>

<Test --color="red" hydrate-client={{text: "test2"}} />

<Test hydrate-client={{"--color": "red", text: "test3"}} />
