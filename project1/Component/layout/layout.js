function Layout(){
    return(
<Fragment>
    <mainNav/>
    <main>

        {Props.children}

    </main>
    <footer/>
</Fragment>

    )
}

export default Layout