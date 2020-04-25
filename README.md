# Bear Essentails

Cut-n-paste-ready Material-UI components for your SaaS.

Available components
- [BearAppBar](/src/components/bear/BearAppBar.js)
- [Dialog](/src/components/bear/BearDialog.js)

## Responsive navbar

MUI doesn't have a responsive navbar out of the box.  Fortunately, you can easily build one yourself from `AppBar` and `Hidden`.

```
<BearAppBar
    brandingLogo={BrandingLogo}
    brandingText={BrandingText}
    desktopMenu={desktopMenu}
    mobileMenu={mobileMenu}
/>
```
[View source](/src/components/bear/BearAppBar.js)


#### Desktop

![Bear essentials navbar desktop](./navbar-desktop.png)

#### Mobile

![Bear essentials navbar mobile](./navbar-mobile.png)

---

## Dialog

If you app calls for more more than one dialog, consider building a wrapper like we do here to abstract away unnecessary MUI details.

```
    const [open, setOpen] = useState(false);

    return (
        <BearDialog
            title="A simple dialog"
            open={open}
            setOpen={setOpen}
        >
            <p>They can't scare me, if I scare them first ― Lady Gaga</p>
        </BearDialog>);

```
[View source](/src/components/bear/BearDialog.js)

![Bear essentials dialog](./dialog.png)
