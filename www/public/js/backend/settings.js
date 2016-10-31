var backend = {
    device_url: function(parameters) {
        $.get('/rest/settings/device_domain')
            .done(function (data) {
                if (parameters.hasOwnProperty("done")) {
                    parameters.done(data);
                }
            })
            .fail(function (xhr, textStatus, errorThrown) {
                var error = null;
                if (xhr.hasOwnProperty('responseJSON')) {
                    var error = xhr.responseJSON;
                }
                if (parameters.hasOwnProperty("fail")) {
                    parameters.fail(xhr.status, error);
                }
            })
            .always(function() {
                if (parameters.hasOwnProperty("always")) {
                    parameters.always();
                }
            });
    },

    send_logs: function(parameters) {
        $.get('/rest/send_log')
            .done(function (data) {
                if (parameters.hasOwnProperty("done")) {
                    parameters.done(data);
                }
            })
            .fail(function (xhr, textStatus, errorThrown) {
                var error = null;
                if (xhr.hasOwnProperty('responseJSON')) {
                    var error = xhr.responseJSON;
                }
                if (parameters.hasOwnProperty("fail")) {
                    parameters.fail(xhr.status, error);
                }
            })
            .always(function() {
                if (parameters.hasOwnProperty("always")) {
                    parameters.always();
                }
            });
    },

    reactivate: function() {
        var internal_web = (new URI()).port(81).directory("").filename("").query("");
        window.location.href = internal_web;
    },

    check_access: function(parameters) {
        $.get('/rest/settings/access')
            .done(function (data) {
                if (parameters.hasOwnProperty("done")) {
                    parameters.done(data);
                }
            })
            .fail(function (xhr, textStatus, errorThrown) {
                var error = null;
                if (xhr.hasOwnProperty('responseJSON')) {
                    var error = xhr.responseJSON;
                }
                if (parameters.hasOwnProperty("fail")) {
                    parameters.fail(xhr.status, error);
                }
            })
            .always(function() {
                if (parameters.hasOwnProperty("always")) {
                    parameters.always();
                }
            });
    },

    external_access: function(parameters) {
        var state = parameters.state;
        $.get('/rest/settings/set_external_access?external_access=' + state)
            .done(function (data) {
                if (parameters.hasOwnProperty("done")) {
                    parameters.done(data);
                }
            })
            .fail(function (xhr, textStatus, errorThrown) {
                var error = null;
                if (xhr.hasOwnProperty('responseJSON')) {
                    var error = xhr.responseJSON;
                }
                if (parameters.hasOwnProperty("fail")) {
                    parameters.fail(xhr.status, error);
                }
            })
            .always(function() {
                if (parameters.hasOwnProperty("always")) {
                    parameters.always();
                }
            });
    },

    protocol: function(parameters) {
        var new_protocol = parameters.new_protocol;
        $.get('/rest/settings/set_protocol?protocol=' + new_protocol)
            .done(function (data) {
                if (parameters.hasOwnProperty("done")) {
                    parameters.done(data);
                }
            })
            .fail(function (xhr, textStatus, errorThrown) {
                var error = null;
                if (xhr.hasOwnProperty('responseJSON')) {
                    var error = xhr.responseJSON;
                }
                if (parameters.hasOwnProperty("fail")) {
                    parameters.fail(xhr.status, error);
                }
            })
            .always(function() {
                if (parameters.hasOwnProperty("always")) {
                    parameters.always();
                }
            });
    },

    get_versions: function(parameters) {
        $.get('/rest/settings/versions')
            .done(function (data) {
                if (parameters.hasOwnProperty("done")) {
                    parameters.done(data);
                }
            })
            .fail(function (xhr, textStatus, errorThrown) {
                var error = null;
                if (xhr.hasOwnProperty('responseJSON')) {
                    var error = xhr.responseJSON;
                }
                if (parameters.hasOwnProperty("fail")) {
                    parameters.fail(xhr.status, error);
                }
            })
            .always(function() {
                if (parameters.hasOwnProperty("always")) {
                    parameters.always();
                }
            });
    },

    check_versions: function(parameters) {
        $.get('/rest/check')
            .done(function (data) {
                run_after_sam_is_complete(function() {
                    if (parameters.hasOwnProperty("done")) {
                        parameters.done(data);
                    }
                });
            })
            .fail(function (xhr, textStatus, errorThrown) {
                var error = null;
                if (xhr.hasOwnProperty('responseJSON')) {
                    var error = xhr.responseJSON;
                }
                if (parameters.hasOwnProperty("fail")) {
                    parameters.fail(xhr.status, error);
                }
            })
            .always(function() {
                run_after_sam_is_complete(function() {
                    if (parameters.hasOwnProperty("always")) {
                        parameters.always();
                    }
                });
            });
    },

    platform_upgrade: function(parameters) {
        $.get('/rest/settings/system_upgrade')
            .done(function (data) {
                run_after_sam_is_complete(function() {
                    if (parameters.hasOwnProperty("done")) {
                        parameters.done(data);
                    }
                });
            })
            .fail(function (xhr, textStatus, errorThrown) {
                var error = null;
                if (xhr.hasOwnProperty('responseJSON')) {
                    var error = xhr.responseJSON;
                }
                if (parameters.hasOwnProperty("fail")) {
                    parameters.fail(xhr.status, error);
                }
            })
            .always(function() {
                run_after_sam_is_complete(function() {
                    if (parameters.hasOwnProperty("always")) {
                        parameters.always();
                    }
                });
            });
    },

    sam_upgrade: function(parameters) {
        $.get('/rest/settings/sam_upgrade')
            .done(function (data) {
                run_after_sam_is_complete(function() {
                    if (parameters.hasOwnProperty("done")) {
                        parameters.done(data);
                    }
                });
            })
            .fail(function (xhr, textStatus, errorThrown) {
                var error = null;
                if (xhr.hasOwnProperty('responseJSON')) {
                    var error = xhr.responseJSON;
                }
                if (parameters.hasOwnProperty("fail")) {
                    parameters.fail(xhr.status, error);
                }
            })
            .always(function() {
                run_after_sam_is_complete(function() {
                    if (parameters.hasOwnProperty("always")) {
                        parameters.always();
                    }
                });
            });
    },

    update_disks: function(parameters) {
        $.get('/rest/settings/disks')
            .done(function (data) {
                if (parameters.hasOwnProperty("done")) {
                    parameters.done(data);
                }
            })
            .fail(function (xhr, textStatus, errorThrown) {
                var error = null;
                if (xhr.hasOwnProperty('responseJSON')) {
                    var error = xhr.responseJSON;
                }
                if (parameters.hasOwnProperty("fail")) {
                    parameters.fail(xhr.status, error);
                }
            })
            .always(function() {
                if (parameters.hasOwnProperty("always")) {
                    parameters.always();
                }
            });
    },

    update_boot_disk: function(parameters) {
        $.get('/rest/settings/boot_disk')
            .done(function (data) {
                if (parameters.hasOwnProperty("done")) {
                    parameters.done(data);
                }
            })
            .fail(function (xhr, textStatus, errorThrown) {
                var error = null;
                if (xhr.hasOwnProperty('responseJSON')) {
                    var error = xhr.responseJSON;
                }
                if (parameters.hasOwnProperty("fail")) {
                    parameters.fail(xhr.status, error);
                }
            })
            .always(function() {
                if (parameters.hasOwnProperty("always")) {
                    parameters.always();
                }
            });
    },

    disk_action: function(parameters) {
        var disk_device = parameters.disk_device;
        var is_activate = parameters.is_activate;
        var mode = is_activate ? "disk_activate" : "disk_deactivate";
        $.get('/rest/settings/' + mode, {device: disk_device})
            .done(function (data) {
                if (data.hasOwnProperty('success') && !data.success) {
                    if (parameters.hasOwnProperty("fail")) {
                        parameters.fail(200, data);
                    }
                } else if (parameters.hasOwnProperty("done")) {
                    parameters.done(data);
                }
            })
            .fail(function (xhr, textStatus, errorThrown) {
                var error = null;
                if (xhr.hasOwnProperty('responseJSON')) {
                    var error = xhr.responseJSON;
                }
                if (parameters.hasOwnProperty("fail")) {
                    parameters.fail(xhr.status, error);
                }
            })
            .always(function() {
                if (parameters.hasOwnProperty("always")) {
                    parameters.always();
                }
            });
    },
    
    boot_extend: function(parameters) {
        $.get('/rest/settings/boot_extend')
            .done(function (data) {
                run_after_boot_extend_is_complete(function() {
                    if (parameters.hasOwnProperty("done")) {
                        parameters.done(data);
                    }
                });
            })
            .fail(function (xhr, textStatus, errorThrown) {
                var error = null;
                if (xhr.hasOwnProperty('responseJSON')) {
                    var error = xhr.responseJSON;
                }
                if (parameters.hasOwnProperty("fail")) {
                    parameters.fail(xhr.status, error);
                }
            })
            .always(function() {
                run_after_boot_extend_is_complete(function() {
                    if (parameters.hasOwnProperty("always")) {
                        parameters.always();
                    }
                });
            });
    }  
};