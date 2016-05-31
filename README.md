# Bootstrap FloatAlert for Nette Framework

## Add to file

BasePresenter.php

```php
public function afterRender() 
{
    if ($this->isAjax() && $this->hasFlashSession()) 
    {
        $this->invalidateControl('flashes');
    }
}
```

layout.latte

```latte
{snippet flashes}
<div n:if="$flashes" class="float-alerts">
    {foreach $flashes as $flash}
        <div class="alert alert-{$flash->type} alert-dismissible" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label=Close><span aria-hidden="true">&times;</span></button>
            {$flash->message}
        </div>
    {/foreach}
</div>
{/snippet}
```

## Using

Dark colors

```php
$this->flashMessage('Message', 'dark');
$this->flashMessage('Message', 'success dark');
$this->flashMessage('Message', 'info dark');
$this->flashMessage('Message', 'warning dark');
$this->flashMessage('Message', 'danger dark');
```

Bootstrap colors

```php
$this->flashMessage('Message', 'success');
$this->flashMessage('Message', 'info');
$this->flashMessage('Message', 'warning');
$this->flashMessage('Message', 'danger');
```
